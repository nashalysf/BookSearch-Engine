import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_BOOK = gql`
  mutation addBook($bookId: ID!, $title: String!) {
    addBook(bookId: $bookId, authors: String, title: String, description: String, link: String, image: String ) {
      _id
      savedBooks {
        _id
        authors
        title
        link
      }
    }
  }
`;