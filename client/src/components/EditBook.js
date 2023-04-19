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
    <div>
        <button onClick={handleShowEditBook}>Close Editor</button>
        <h1>Edit Book</h1>
        <form onSubmit={updateBook}>
            <div>
                <label>Book Title:</label>
                <input type="text" required maxLength="30" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)}/>
                <span></span>
            </div>
            <div>
                <label>Author:</label>
                <select id="author" name="author" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)}>
                    {/* {authorList} */}
                </select>
            </div>
            <div>
                <label>Book Description:</label>
                <input type="text" required maxLength="100" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} size="50"/>
                <span></span>
            </div>
            <div>
                <label>Owned?</label>
                <input type="checkbox" id="owned" name="owned" checked={bookOwned} onChange={handleOwned}/>
                <span></span>
            </div>

            {bookOwned ? <div>
                <div>
                    <label>Read?</label>
                    <input type="checkbox" id="read" name="read" checked={bookRead} onChange={handleRead}/>
                    <span></span>
                </div>
                <div>
                    <label>Currently Reading?</label>
                    <input type="checkbox" id="open" name="open" checked={bookOpen} onChange={handleOpen}/>
                    <span></span>
                </div>
                <div>
                    <label>Rating: </label>
                    <select id="rating" name="rating" value={bookRating} onChange={(e) => setBookRating(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option> 
                        <option value="3">3</option> 
                        <option value="4">4</option>  
                        <option value="5">5</option> 
                    </select>
                    <span></span>
                </div>
            </div> : null}

            <div>
                <button>Update Book</button>
            </div>
        </form>
    </div>
  )
}

export default EditBook