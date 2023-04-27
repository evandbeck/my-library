import React from 'react';
import Book from './Book';
import Sort from './Sort';

function Read({ read, setRead }) {

    let sortAlphabetically = read.toSorted((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });

    let sortRatingDesc = read.toSorted((a, b) => a.rating - b.rating);

    let sortRatingAsc = read.toSorted((a, b) => b.rating - a.rating);

    let readList = read.map(book => <Book key={book.id} book={book} />)

    function handleSortAlphabetically() {
      readList = sortAlphabetically.map(book => <Book key={book.id} book={book} />)
      setRead(sortAlphabetically);
    }
  
    function handleSortRatingDesc() {
      readList = sortRatingDesc.map(book => <Book key={book.id} book={book} />)
      setRead(sortRatingDesc)
    }

    function handleSortRatingAsc() {
      readList = sortRatingAsc.map(book => <Book key={book.id} book={book} />)
      setRead(sortRatingAsc)
    }

  return (
    <div className="bg-slate-100 rounded-lg m-2">
        <h1 className="py-4 pr-2 first-line:text-3xl font-bold">Read</h1>
        <Sort 
          handleSortAlphabetically={handleSortAlphabetically} 
          handleSortRatingDesc={handleSortRatingDesc} 
          handleSortRatingAsc={handleSortRatingAsc}
        />
        <hr className="w-96 h-1 mx-auto my-1 bg-gray-200 border-0 rounded"></hr>
        <div className="container mx-auto p-2 grid grid-cols-2">
          {readList}
        </div>
    </div>
  )
}

export default Read