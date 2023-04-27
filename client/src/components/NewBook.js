import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import NewAuthor from './NewAuthor';

function NewBook({ authors, handleUpdateState, showAddBook, setShowAddBook }) {
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState(authors[0].id)
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
        const newBook = {
            title: bookTitle,
            description: bookDescription,
            read: bookRead,
            rating: bookRating,
            own: bookOwned,
            open: bookOpen,
            author_id: bookAuthor
        }
        handleSubmitNewBookToDB(newBook);
        handleUpdateState(newBook);
        setShowAddBook(showAddBook => !showAddBook)
    }

    function handleSubmitNewBookToDB(newBook) {
        axios.post(API_BOOKS, newBook)
        // .then(resp => console.log(resp))
        .catch(error => console.log(error));
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
    <div className="bg-white w-[33%] border shadow-md p-4 m-2 rounded-md">
        <h1 className="text-lg font-semibold">Add New Book</h1>
        <hr className="m-3"></hr>
        <form onSubmit={submitNewBook}>
            <div className="text-left ml-10">
                <div className="mb-2">
                    <label className="font-semibold">Title:</label>
                    <input className="border-2 border-slate-10 rounded-lg ml-2" type="text" required maxLength="30" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label className="font-semibold">Author:</label>
                    <select className="border-2 border-slate-100 rounded-lg ml-2" id="author" required value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)}>
                        <option selected disabled>Select author</option>
                        {authorList}
                    </select>
                </div>
                <div className="mb-2">
                    <label className="font-semibold">Description:</label>
                    <input className="border-2 border-slate-100 rounded-lg ml-2" type="text" required maxLength="100" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} size="50"/>
                </div>
                <div className="mb-2">
                    <label className="font-semibold">Owned?</label>
                    <input className="ml-2 w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500" type="checkbox" id="owned" name="owned" checked={bookOwned} onChange={handleOwned}/>
                </div>

                {bookOwned ? 
                    <div>
                        <div className="mb-2">
                            <label className="font-semibold">Read?</label>
                            <input className="ml-2 w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500" type="checkbox" id="read" name="read" checked={bookRead} onChange={handleRead}/>
                        </div>
                        <div className="mb-2">
                            <label className="font-semibold">Currently Reading?</label>
                            <input className="ml-2 w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500" type="checkbox" id="open" name="open" checked={bookOpen} onChange={handleOpen}/>
                        </div>
                        <div className="mb-2">
                            <label className="font-semibold">Rating: </label>
                            <select className="border-2 border-slate-100 rounded-lg ml-2" id="rating" name="rating" value={bookRating} onChange={(e) => setBookRating(e.target.value)}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option> 
                                <option value="3">3</option> 
                                <option value="4">4</option>  
                                <option value="5">5</option> 
                            </select>
                        </div>
                    </div> 
                : null}
            </div>
            <div>
                <button className="bg-sky-500 hover:bg-sky-600 rounded-md p-2 m-2 text-sm font-semibold w-[120px] text-white">Add Book</button>
            </div>
        </form>
        <hr className="m-3"></hr>

        <label className="text-red-600 font-semibold mb-2">Don't see the Author? </label>
            <button className="bg-slate-100 hover:bg-slate-200 rounded-md p-2 m-1 w-[150px] text-sm font-semibold mb-2"
                onClick={(e) => handleShowAddAuthor(e)}>{showAddAuthor ? "Close" : "Add New Author"}</button>
            {showAddAuthor ? <NewAuthor /> : null}
        <span></span>

    </div>
  )
}

export default NewBook