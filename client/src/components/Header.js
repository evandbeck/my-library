import React from 'react';
import { useState } from 'react';
import NewBook from './NewBook';

function Header() {
    const [showAddBook, setShowAddBook] = useState(false)

    function handleShowAddBook() {
      setShowAddBook(showAddBook => !showAddBook);
    }
  return (
    <div>
        <h1>Header</h1>
        <button onClick={handleShowAddBook}>{showAddBook ? "Close Form" : "Add New Book"}</button>
        {showAddBook ? <NewBook /> : null}
    </div>
  )
}

export default Header