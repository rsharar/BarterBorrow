const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    userid: {
        type: Number,
        unique: false,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: true,
    },
    img:{

    },
    category:{
        type: String
    },
    createdate:{
        
    }
})


const userSchema = new Schema({
	firstName: { type: String, unique: false },
	lastName: { type: String, unique: false },
	local: {
		username: { type: String, unique: false, required: false },
		password: { type: String, unique: false, required: false }
	},
	google: {
		googleId: { type: String, required: false }
	},
	photos: []
	// local: {