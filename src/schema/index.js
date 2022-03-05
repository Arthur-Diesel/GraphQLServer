const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Book {
    _id: ID!
    title: String!
    pages: Int!
    language: String!
    publishedAt: String
    publisher: String
  }

  input BookType {
      title: String!
      pages: Int!
      language: String!
      publishedAt: String
      publisher: String
  }

  type RootQuery {
      books: [Book!]
      book(_id: String!): Book!
  }

  type Mutation {
      createBook(book: BookType): Book,
      deleteBook(_id: String): Book,
      updateBook(_id: String,
        title: String,
        pages: Int,
        language: String,
        publishedAt: String,
        publisher: String
      ): String
  }

  schema {
      query: RootQuery
      mutation: Mutation
  }

`);