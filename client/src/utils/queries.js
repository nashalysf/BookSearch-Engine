import { gql } from "@apollo/client";

export const QUERY_BOOK = gql`
  query book($id: ID!) {
    book(_id: $id) {
      _id
      authors
      title
      description
      image
      link
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        authors
        title
        description
        image
        link
      }
    }
  }
`;
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        title
      }
    }
  }
`;

export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
