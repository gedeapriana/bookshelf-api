const { addBook } = require('./handler/addBook')
const { getAllBooks } = require('./handler/getAllBooks')
const { getDetailBookById } = require('./handler/getDetailBookById')
const { editBookById } = require('./handler/editBookById')
const { deleteBookById } = require('./handler/deleteBookById')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailBookById
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById
  }
]

module.exports = routes
