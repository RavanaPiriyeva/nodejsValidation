const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
    year: Number,
    description: String,
})


const Book = mongoose.model('Book', bookSchema);

module.exports = {
    Book
}