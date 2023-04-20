import React from 'react';
import { useState } from 'react';
import EditBook from './EditBook';
import axios from 'axios';

function Book({ book }) {
  const {id, title, description, read, rating} = book;
  
  const [editBook, setEditBook] = useState(false)
  const [deleteBook, setDeleteBook] = useState(false)

  const API_BOOKS = `http://localhost:3000/api/v1/books/${id}`;
    
    function handleShowEditBook() {
      setEditBook(editBook => !editBook)
    }

    function handleShowDeleteBook() {
      setDeleteBook(deleteBook => !deleteBook)
    }

    function handleDeleteBook() {
      axios.delete(API_BOOKS)
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
    }

    const displayBookCard = (
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Read: {read ? "Yes" : "No"}</p>
        <p>Rating: {rating}/5</p>
        <button onClick={handleShowEditBook}>Update</button>
        <button onClick={handleShowDeleteBook}>Delete</button>
        {deleteBook ? 
          <div>
            <p>Are you sure?</p>
            <button onClick={handleDeleteBook}>Yes</button>
            <button onClick={handleShowDeleteBook}>No</button>
          </div> 
        : null}
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