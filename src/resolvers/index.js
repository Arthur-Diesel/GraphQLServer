const Book = require("../models/book")

module.exports = {

    books: async () => {
        const booksFetched = await Book.find()
        return booksFetched.map(book => {
            return {
                ...book._doc,
                _id: book.id
            }
        })
    },

    book: async (_id) => {
        const bookFetched = await Book.findById(_id)
        return {
            ...bookFetched._doc,
            _id: bookFetched.id
        }
    },

    createBook: async (args) => {
        const { title, pages, language, publishedAt, publisher } = args.book
        const book = new Book({
            title,
            pages,
            language,
            publishedAt,
            publisher
        })

        const newBook = await book.save()
        return {...newBook._doc, _id: newBook.id }
    },

    deleteBook: async (_id) => {
        const deletedBook = await Book.findByIdAndDelete(_id)
        return {
            ...deletedBook._doc,
            _id: deletedBook.id
        }
    },

    updateBook: async (args) => {
        const { _id, title, pages, language, publishedAt, publisher } = args
        const updatedBook = await Book.findByIdAndUpdate(_id, {
            title: title,
            pages: pages,
            language: language,
            publishedAt: publishedAt,
            publisher: publisher
        })
        return `Book ${updatedBook.id} updated!`
    }
}