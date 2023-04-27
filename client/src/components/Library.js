import React from 'react';
import { useState } from 'react';
import Book from './Book';
import Search from './Search';

function Library({ library }) {
  const [search, setSearch] = useState("")

    const filteredLibrary = library.filter(book => book.title.includes(search))

    let libraryBooks = filteredLibrary.map(book => <Book key={book.id} book={book} />)

    // const height = document.querySelector('#library').offsetHeight;

    // const dynamicHeight = `min-h-[${height}]`

    // console.log(dynamicHeight);

  return (
    <div id="library" className="">
        <h1 className="py-4 text-3xl font-bold">Library</h1>
        <Search search={search} setSearch={setSearch}/>
        <hr className="w-96 h-1 mx-auto my-1 bg-gray-200 border-0 rounded"></hr>
        <div className="container mx-auto p-2 grid grid-cols-3">
          {libraryBooks}
        </div>
    </div>
  )
}

export default Library