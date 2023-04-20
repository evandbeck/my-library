import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewBook from './NewBook';

function Header() {
    const [showAddBook, setShowAddBook] = useState(false)
    const [authors, setAuthors] = useState([]);

    const API_AUTHORS = "http://localhost:3000/api/v1/authors";

    async function getAPIAuthors() {
      const resp = await axios.get(API_AUTHORS);
      return resp.data;
    }

    useEffect(() => {
      getAPIAuthors().then(data => setAuthors(data));
    }, []);

    function handleShowAddBook() {
      setShowAddBook(showAddBook => !showAddBook);
    }
    
  return (
    <div>
        <h1 className="font-bold">Header</h1>
        <button onClick={handleShowAddBook}>{showAddBook ? "Close Form" : "Add New Book"}</button>
        {showAddBook ? <NewBook authors={authors} showAddBook={showAddBook} setShowAddBook={setShowAddBook} /> : null}
    </div>
  )
}

export default Header