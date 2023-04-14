import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function NewAuthor() {
  const [authorName, setAuthorName] = useState("")

  const API_AUTHORS = "http://localhost:3000/api/v1/authors";

  function submitNewAuthor(e) {
    e.preventDefault();
    axios.post(API_AUTHORS, {
      name: authorName
    })
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
  }

  return (
    <div>
      <h1>Add New Author</h1>
      <form onSubmit={submitNewAuthor}>
        <div>
            <label>Author Name:</label>
            <input type="text" required maxLength="30" value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
            <span></span>
        </div>
        <div>
          <button>Add Author</button>
        </div>
      </form>
    </div>
  )
}

export default NewAuthor