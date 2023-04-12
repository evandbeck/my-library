import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function NewBook() {
    const [bookTitle, setBookTitle] = useState("");
    const [bookDescription, setBookDescription] = useState("")
    const [bookRead, setBookRead] = useState(false)
    const [bookRating, setBookRating] = useState(0)
    const [bookOwned, setBookOwned] = useState(false)
    const [bookOpen, setBookOpen] = useState(false)

    const API_BOOKS = "http://localhost:3000/api/v1/books";

    function submitNewBook(e) {
        e.preventDefault();
        axios.post(API_BOOKS, {
            title: bookTitle,
            description: bookDescription,
            read: bookRead,
            rating: bookRating,
            own: bookOwned,
            open: bookOpen,
            author_id: 1
        })
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    function handleRead() {
        setBookRead(bookRead => !bookRead)
    }

    function handleRating() {
        setBookRating(bookRating => !bookRating)
    }

    function handleOwned() {
        setBookOwned(bookOwned => !bookOwned)
    }

    function handleOpen() {
        setBookOpen(bookOpen => !bookOpen)
    }

  return (
    <div>
        <h1>Add New Book</h1>
        <form onSubmit={submitNewBook}>
            <div>
                <input type="text" required maxLength="30" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)}/>
                <span></span>
                <label>Book Title:</label>
            </div>
            <div>
                <input type="text" required maxLength="100" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} size="50"/>
                <span></span>
                <label>Book Description:</label>
            </div>
            <div>
                <input type="checkbox" id="read" name="read" checked={bookRead} onChange={handleRead}/>
                <span></span>
                <label>Read?</label>
            </div>
            <div>
                <select id="rating" name="rating" value={bookRating} onChange={handleRating}>
                    <option value="1">1</option>
                    <option value="2">2</option> 
                    <option value="3">3</option> 
                    <option value="4">4</option>  
                    <option value="5">5</option> 
                </select>
                <span></span>
                <label>Rating:</label>
            </div>
            <div>
                <input type="checkbox" id="owned" name="owned" checked={bookOwned} onChange={handleOwned}/>
                <span></span>
                <label>Owned?</label>
            </div>
            <div>
                <input type="checkbox" id="open" name="open" checked={bookOpen} onChange={handleOpen}/>
                <span></span>
                <label>Currently Reading?</label>
            </div>
            <div>
                <button>Add Book</button>
            </div>
        </form>
    </div>
  )
}

export default NewBook