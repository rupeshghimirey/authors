const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name must be at least 2 characters"]
    },
})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author;