// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const booksSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String },
    year: { type: Number },
    quantity: { type: Number },
    imageURL: { type: String }
})

//export

const Book = mongoose.model('Book', booksSchema)
module.exports = Book