// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
const passport = require('./passport')
const routes = require('./routes')
// const keys = require('./config/keys');
// const cookieSession = require('cookie-session');
const app = module.exports.app = express();
const PORT = process.env.PORT || 3001
var http = require('http')
var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance
server.listen(PORT + 1);  //listen on port 80

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// set up session cookies
// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [keys.session.cookieKey]
// }));

// ===== testing middleware =====
app.use(function (req, res, next) {
	// console.log('===== passport user =======')
	// console.log("Session: " + req.session)
	// console.log("User: " + req.user)
	// console.log('===== END =======')
	next()
})
// testing
app.get(
	'/auth/google/callback',
	(req, res, next) => {
		console.log(`req.user: ${req.user}`)
		console.log('======= /auth/google/callback was called! =====')
		next()
	},
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => {
		res.redirect('/')
	}
)

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, './client/build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, './client/build/'))
	})
}

/* Express app ROUTING */
app.use('/auth', require('./auth'))
app.use(routes)

// ====== Error handler ====
app.use(function (err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

io.on('connection', (socket) => {
    console.log(socket.id);
	// console.log("NEW SOCKET CONNECTION")
    socket.on('SEND_MESSAGE', function(data){
        // console.log("BACKEND SEND RECEIPT")
        io.emit('RECEIVE_MESSAGE', data);
    })
});

// io.on('connection', function (socket) {

// 	var room = socket.handshake['query']['r_var'];

// 	socket.join(room);
// 	console.log('**************************');
// 	console.log('user joined room #' + room);
// 	console.log('**************************');

// 	socket.on('disconnect', function () {
// 		socket.leave(room)
// 		console.log('user disconnected');
// 	});

// 	socket.on('SEND_MESSAGE', function (msg) {
// 		io.to(room).emit('RECEIVE_MESSAGE', msg);
// 	});

// });

// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})