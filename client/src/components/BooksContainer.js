import React from 'react';
import Book from './Book';

function BooksContainer({ books }) {
    let booksList = books.map(book =><Book key={book.id} book={book} />)
  return (
    <div>
        <h1>Books</h1>
        {booksList}
    </div>
  )
}

export default BooksContainer