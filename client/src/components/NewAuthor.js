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
      <form onSubmit={submitNewAuthor}>
        <div className="text-left ml-10">
            <label className="font-semibold">Author Name:</label>
            <input className="border-2 border-slate-100 rounded-lg ml-2" type="text" required maxLength="30" value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
            <span></span>
        </div>
        <div>
          <button className="bg-sky-500 hover:bg-sky-600 rounded-md p-2 m-2 text-sm font-semibold w-[120px] text-white">Add Author</button>
        </div>
      </form>
    </div>
  )
}

export default NewAuthor