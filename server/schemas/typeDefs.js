// import the gql `tagged template` function = advanced use of template literals
const { gql } = require("apollo-server-express");

//create typeDefs
const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    title: String
    description: String
    image: String
    link: String
  }
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    books: [Book]
    book(_id: ID!): Book
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(bookId: ID!, authors: String, title: String, description: String, link: String, image: String ): Book
    }
`;

//export typeDefs
module.exports = typeDefs;
