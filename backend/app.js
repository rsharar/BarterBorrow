var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var server = app.listen(3001, function(){
    console.log('server is running on port 3001')
});

io = socket(server);
// console.log("############### IO ###############\n"+io)

io.on('connection', (socket) => {
    console.log("NEW CONNECTION");

    socket.on('SEND_MESSAGE', function(data){
        console.log("BACKEND SEND RECEIPT")
        io.emit('RECEIVE_MESSAGE', data);
    })
});

