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
      <div className="col-span-1 flex flex-col bg-white border shadow-md p-4 m-2 rounded-md">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm m-2">{description}</p>
        <div className="">
          <span className="ml-2 font-semibold">Read: </span><span className="mr-2">{read ? "Yes" : "No"}</span>
          <span className="ml-2 font-semibold">Rating: </span><span className="mr-2">{rating}/5</span>
        </div>
        <hr className="m-3"></hr>
        <div>
          <button className="bg-sky-500 hover:bg-sky-600 rounded-md p-2 m-2 w-[80px] text-sm font-semibold text-white"
            onClick={handleShowEditBook}>Edit</button>
          <button className="bg-sky-500 hover:bg-sky-600 rounded-md p-2 m-2 w-[80px] text-sm font-semibold text-white"
            onClick={handleShowDeleteBook}>Delete</button>
        </div>
        {deleteBook ? 
          <div>
            <span className="text-red-600 font-semibold">Are you sure you want to delete this book?</span>
            <div>
              <button className="bg-slate-100 hover:bg-slate-200 rounded-md p-2 m-1 w-[40px] text-sm font-semibold"
                onClick={handleDeleteBook}>Yes</button>
              <button className="bg-slate-100 hover:bg-slate-200 rounded-md p-2 m-1 w-[40px] text-sm font-semibold"
                onClick={handleShowDeleteBook}>No</button>
            </div>
          </div> 
        : null}
    </div>
    )

    const displayEditBook = (<EditBook book={book} handleShowEditBook={handleShowEditBook} />)

  return (
    <div className="">
      {editBook ? displayEditBook : displayBookCard}
    </div>
  )
}

export default Book