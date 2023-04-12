import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function NewBook() {
    const [bookTitle, setBookTitle] = useState("");
    const [bookDescription, setBookDescription] = useState("")
    const [bookOwned, setBookOwned] = useState(false)
    const [bookOpen, setBookOpen] = useState(false)

    const API_BOOKS = "http://localhost:3000/api/v1/books";

    function submitNewBook(e) {
        e.preventDefault();
        axios.post(API_BOOKS, {
            title: bookTitle,
            description: bookDescription,
            rating: "",
            own: bookOwned,
            open: "",
            author_id: 1
        })
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
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
                <label>Book Title</label>
            </div>
            <div>
                <input type="text" required maxLength="100" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} size="50"/>
                <span></span>
                <label>Book Description</label>
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