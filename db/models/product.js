const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define productSchema
// TODO: add validation for image
const productSchema = new Schema({
    title: { type: String, unique: false, required: true },
	owneruserid: { type: Number, unique: false, required: true },
	description: { type: String, unique: false, required: true },
    imageurl: { type: String, unique: true, required: true },
    category: { type: String, unique: false, required: true },
    location: { type: String, unique: false, required: true },
    status: { type: String, unique: false, required: true },
	createdat: { 
		type: Date, required: true, default: Date.now }
})

// Create reference to User & export
const Product = mongoose.model('Product', productSchema)
module.exports = Product
