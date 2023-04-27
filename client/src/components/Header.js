import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewBook from './NewBook';

function Header({ handleUpdateState }) {
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
    <div className="">
        <button className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 rounded-md w-[200px] p-3 m-2 font-semibold text-white" 
          onClick={handleShowAddBook}>
            {showAddBook ? "Close Form" : "Add New Book"}
        </button>
        <div className="flex flex-row justify-center items-center">
          {showAddBook ? <NewBook authors={authors} showAddBook={showAddBook} handleUpdateState={handleUpdateState} setShowAddBook={setShowAddBook} /> : null}
        </div>
    </div>
  )
}

export default Header