import {gql} from '@apollo/client'
import client from './client'

export const bookQuery = gql`
  query BookQuery {
    getBooks { 
        _id
        title 
        author 
        book_image 
        description
        primary_isbn13
        bestsellers_date
    }
  }
`

export const getSelectedBooks = gql`
  query getSelectedBooks($userId: ID) {
    getSelectedBooks(userId: $userId) { 
        _id
        title 
        author 
        book_image 
        description
        primary_isbn13
        bestsellers_date
    }
  }
`

export const getUserFriends = gql`
  query getUserFriends($userId: ID) {
    getUserFriends(userId: $userId) { 
        _id
        userIcon
        userName
        books_selected
    }
  }
`

export const getUserChannels = gql`
  query getUserChannels {
    getUserChannels {
      _id
      channelName
      channelMembers {
        userName
      }
      messageList {
        messageFrom {
          _id
          userName
        }
      messageText
      }
    }
  }
`

export const addBookMutation = gql`
  mutation AddBookMutation($input: BookInput!) {
    book: addBook(input: $input) {
      title
      author
      book_image
      description
      primary_isbn13
    }
  }
`


export const bookSelectedMutation = gql`
  mutation BookSelectedMutation($new_book_selected: ID) {
    selectBook(new_book_selected: $new_book_selected) {
      books_selected
    }
  }
`

export const bookRejectedMutation = gql`
  mutation BookRejectedMutation($new_book_rejected: ID) {
    rejectBook(new_book_rejected: $new_book_rejected) {
      books_rejected
    }
  }
`

export const bookSnoozedMutation = gql`
  mutation BookSnoozedMutation($new_book_snoozed: ID) {
    snoozeBook(new_book_snoozed: $new_book_snoozed) {
      books_snoozed {
        book_id
        date_created
      }
    }
  }
`

export const messageAddedSubscription = gql`
  subscription MessageAdded($messageChannel: ID) {
    messageAdded(messageChannel: $messageChannel) {
      _id
      messageFrom {
        _id
        userName
      }
      messageText
      messageChannel {
        _id
        channelName
      }
    }
  }
`

export const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    getBooks @client { 
      _id
      title
      author
      book_image
      description
      primary_isbn13
    }
  }
`

export const selectBook = async(new_book_selected) => {
  const {data: {selectBook: {books_selected}}} = await client.mutate({mutation: bookSelectedMutation, variables: {new_book_selected}})
  console.log("BOOKSSELECTION", books_selected)
  return(books_selected)
}

export const rejectBook = async(new_book_rejected) => {
  const {data: {rejectBook: {books_rejected}}} = await client.mutate({mutation: bookRejectedMutation, variables: {new_book_rejected}})
  return(books_rejected)
}

export const snoozeBook = async(new_book_snoozed) => {
  const {data: {snoozeBook: {books_snoozed}}} = await client.mutate({mutation: bookSnoozedMutation, variables: {new_book_snoozed}})
  return(books_snoozed)
}

export const getBookDeck = async() => {
  const { data: {getBooks} } = await client.query({ query: bookQuery })
  return getBooks
}