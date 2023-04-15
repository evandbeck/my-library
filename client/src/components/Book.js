import React from 'react';
import { useState } from 'react';
import EditBook from './EditBook';

function Book({ book }) {
  const {title, description, read, rating} = book;
  
  const [editBook, setEditBook] = useState(false)
    
    function handleShowEditBook() {
      setEditBook(editBook => !editBook)
    }

    const displayBookCard = (
      <div className="BookCard">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Read: {read ? "Yes" : "No"}</p>
        <p>Rating: {rating}/5</p>
        <button onClick={handleShowEditBook}>Update</button>
        <button>Delete</button>
    </div>
    )

    const displayEditBook = (<EditBook book={book} handleShowEditBook={handleShowEditBook} />)

  return (
    <div>
      {editBook ? displayEditBook : displayBookCard}
    </div>
  )
}

export default Book