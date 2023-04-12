import React from 'react';
import Book from './Book';

function Reading({ reading }) {

    let readingList = reading.map(book => <Book key={book.id} book={book} />)

  return (
    <div>
        <h1>Reading</h1>
        {readingList}
    </div>
  )
}

export default Reading