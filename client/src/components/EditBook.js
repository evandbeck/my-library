import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function EditBook({ book, handleShowEditBook }) {
    const {id, title, description, read, rating, own, open} = book;
    
    const [bookTitle, setBookTitle] = useState(title);
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookDescription, setBookDescription] = useState(description)
    const [bookRead, setBookRead] = useState(read)
    const [bookRating, setBookRating] = useState(rating)
    const [bookOwned, setBookOwned] = useState(own)
    const [bookOpen, setBookOpen] = useState(open)

    const API_BOOKS = `http://localhost:3000/api/v1/books/${id}`;

    function updateBook(e) {
        e.preventDefault();
        axios.patch(API_BOOKS, {
            title: bookTitle,
            description: bookDescription,
            read: bookRead,
            rating: bookRating,
            own: bookOwned,
            open: bookOpen,
            author_id: bookAuthor
        })
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    function handleRead() {
        setBookRead(bookRead => !bookRead)
    }

    function handleOwned() {
        setBookOwned(bookOwned => !bookOwned)
    }

    function handleOpen() {
        setBookOpen(bookOpen => !bookOpen)
    }

  return (
    <div className="bg-white border shadow-md p-4 m-2 rounded-md">
        <button className="bg-slate-100 hover:bg-slate-200 rounded-md p-2 m-1 w-[150px] text-sm font-semibold mb-2"
            onClick={handleShowEditBook}>Close Editor</button>
        <h1 className="text-lg font-semibold">Edit Book</h1>
        <hr className="m-3"></hr>
        <form onSubmit={updateBook}>
            <div className="text-left ml-10">
                <div className="mb-2">
                    <label className="font-semibold">Title:</label>
                    <input className="border-2 border-slate-10 rounded-lg ml-2" type="text" required maxLength="30" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)}/>
                    <span></span>
                </div>
                <div className="mb-2">
                    <label className="font-semibold">Author:</label>
                    <select className="border-2 border-slate-10 rounded-lg ml-2" id="author" name="author" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)}>
                        {/* {authorList} */}
                    </select>
                </div>
                <div className="mb-2">
                    <label className="font-semibold">Book Description:</label>
                    <input className="border-2 border-slate-10 rounded-lg ml-2" type="text" required maxLength="100" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} size="50"/>
                    <span></span>
                </div>
                <div className="mb-2">
                    <label className="font-semibold">Owned?</label>
                    <input className="ml-2 w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500" type="checkbox" id="owned" name="owned" checked={bookOwned} onChange={handleOwned}/>
                    <span></span>
                </div>

                {bookOwned ? <div>
                    <div className="mb-2">
                        <label className="font-semibold">Read?</label>
                        <input className="ml-2 w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500" type="checkbox" id="read" name="read" checked={bookRead} onChange={handleRead}/>
                        <span></span>
                    </div>
                    <div className="mb-2">
                        <label className="font-semibold">Currently Reading?</label>
                        <input className="ml-2 w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500" type="checkbox" id="open" name="open" checked={bookOpen} onChange={handleOpen}/>
                        <span></span>
                    </div>
                    <div className="mb-2">
                        <label className="font-semibold">Rating: </label>
                        <select className="border-2 border-slate-10 rounded-lg ml-2" id="rating" name="rating" value={bookRating} onChange={(e) => setBookRating(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option> 
                            <option value="3">3</option> 
                            <option value="4">4</option>  
                            <option value="5">5</option> 
                        </select>
                        <span></span>
                    </div>
                </div> : null}
            </div>

            <div>
                <button className="bg-sky-500 hover:bg-sky-600 rounded-md p-2 m-2 text-sm font-semibold w-[120px] text-white">Update Book</button>
            </div>
        </form>
    </div>
  )
}

export default EditBook