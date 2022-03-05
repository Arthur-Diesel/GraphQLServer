const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        pages: {
            type: Number,
            required: true
        },
        language: {
            type: String, 
            required: true
        },
        publishedAt: {
            type: String
        },
        publisher: {
            type: String
        }
    }
)

module.exports = mongoose.model("Book", bookSchema)