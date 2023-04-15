import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import NewAuthor from './NewAuthor';

function NewBook({ authors }) {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookDescription, setBookDescription] = useState("")
    const [bookRead, setBookRead] = useState(false)
    const [bookRating, setBookRating] = useState(0)
    const [bookOwned, setBookOwned] = useState(false)
    const [bookOpen, setBookOpen] = useState(false)
    const [showAddAuthor, setShowAddAuthor] = useState(false)

    const authorList = authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);

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
            author_id: bookAuthor
        })
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    function handleShowAddAuthor(e) {
        e.preventDefault();
        setShowAddAuthor(showAddAuthor => !showAddAuthor);
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
        <h1>Add New Book</h1>
        <form onSubmit={submitNewBook}>
            <div>
                <label>Book Title:</label>
                <input type="text" required maxLength="30" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)}/>
                <span></span>
            </div>
            <div>
                <label>Author:</label>
                <select id="author" name="author" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)}>
                    {authorList}
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
                <button>Add Book</button>
            </div>
        </form>

        <label>Don't see the Author? </label>
            <button onClick={(e) => handleShowAddAuthor(e)}>{showAddAuthor ? "Close" : "Add New Author"}</button>
            {showAddAuthor ? <NewAuthor /> : null}
        <span></span>

    </div>
  )
}

export default NewBook