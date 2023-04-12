import React from 'react';
import Book from './Book';

function Read({ read }) {

    let readList = read.map(book => <Book key={book.id} book={book} />)

  return (
    <div>
        <h1>Read</h1>
        {readList}
    </div>
  )
}

export default Read