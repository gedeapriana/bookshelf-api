const books = require('../books')

const getAllBooks = (request, h) => {
  const { name, reading, finished } = request.query

  if (books.length > 0) {
    let booksWithFilter = books

    if (name) {
      booksWithFilter = booksWithFilter.filter((book) =>
        book.name.toLowerCase().includes(name.toLowerCase())
      )
    }

    if (reading) {
      booksWithFilter = booksWithFilter.filter(
        (book) => book.reading === Number(reading)
      )
    }

    if (finished) {
      booksWithFilter = booksWithFilter.filter(
        (book) => book.finished === Number(finished)
      )
    }

    const response = h.response({
      status: 'success',
      data: {
        books: booksWithFilter.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher
        }))
      }
    })
    response.code(200)
    return response
  } else {
    const response = h.response({
      status: 'success',
      data: {
        books: []
      }
    })
    response.code(200)
    return response
  }
}

exports.getAllBooks = getAllBooks
