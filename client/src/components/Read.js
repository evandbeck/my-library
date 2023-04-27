import React from 'react';
import Book from './Book';

function Read({ read }) {

    let readList = read.map(book => <Book key={book.id} book={book} />)

  return (
    <div className="bg-slate-100 rounded-lg m-2">
        <h1 className="py-4 pr-2 first-line:text-3xl font-bold">Read</h1>
        <hr className="w-96 h-1 mx-auto my-1 bg-gray-200 border-0 rounded"></hr>
        <div className="container mx-auto p-2 grid grid-cols-2">
          {readList}
        </div>
    </div>
  )
}

export default Read