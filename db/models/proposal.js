const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const proposalSchema = new Schema({
    userIdA: { type: String, unique: false, required: true },
    userIdB: { type: String, unique: false, required: true },
    chatHistory: { type: Array, default: [] },
    status: { type: Boolean, unique: false , default: false},
	createdate: { 
		type: Date, required: true, default: Date.now }
})

// Create reference to Proudct & export
const Proposal = mongoose.model('Proposal', proposalSchema)
module.exports = Proposal
