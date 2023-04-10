import React from 'react'

function Books({ books }) {
    let booksList = books.map(book =><div>{book.title}</div>)
  return (
    <div>
        <h1>Books</h1>
        {booksList}
    </div>
  )
}

export default Books