import React from 'react';
// import { useState } from 'react';
import Book from './Book';

function Library({ library }) {

    let libraryList = library.map(book => <Book key={book.id} book={book} />)

  return (
    <div className="BookContainer">
        <h1 className="py-4 text-3xl font-bold">Library</h1>
        <hr className="w-96 h-1 mx-auto my-1 bg-gray-200 border-0 rounded"></hr>
        <div className="container mx-auto p-2 grid grid-cols-3">
          {libraryList}
        </div>
    </div>
  )
}

export default Library