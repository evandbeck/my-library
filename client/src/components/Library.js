import React from 'react';
// import { useState } from 'react';
import Book from './Book';
// import NewBook from './NewBook';

function Library({ library }) {
    // const [showAddBook, setShowAddBook] = useState(false)

    let libraryList = library.map(book => <Book key={book.id} book={book} />)

    // function handleShowAddBook() {
    //   setShowAddBook(showAddBook => !showAddBook);
    // }

  return (
    <div className="BookContainer">
        <h1>Library</h1>
        {/* <button onClick={handleShowAddBook}>{showAddBook ? "Close Form" : "Add New Book"}</button>
        {showAddBook ? <NewBook /> : null} */}
        {libraryList}
    </div>
  )
}

export default Library