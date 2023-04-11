import React from 'react';
import { useState } from 'react';
import Book from './Book';
import NewBook from './NewBook';

function BooksContainer({ books }) {
    const [showAddBook, setShowAddBook] = useState(false)

    let booksList = books.map(book => <Book key={book.id} book={book} />)

    function handleShowAddBook() {
      setShowAddBook(showAddBook => !showAddBook);
    }

  return (
    <div className="BookContainer">
        <h1>Books</h1>
        <button onClick={handleShowAddBook}>{showAddBook ? "Close Form" : "Add New Book"}</button>
        {showAddBook ? <NewBook /> : null}
        {booksList}
    </div>
  )
}

export default BooksContainer