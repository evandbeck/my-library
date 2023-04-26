import React from 'react';
import Book from './Book';

function Reading({ reading }) {

    let readingList = reading.map(book => <Book key={book.id} book={book} />)

  return (
    <div className="">
        <h1 className="py-4 text-3xl font-bold">Currently Reading</h1>
        <div className="container mx-auto p-2 grid grid-cols-2">
          {readingList}
        </div>
    </div>
  )
}

export default Reading