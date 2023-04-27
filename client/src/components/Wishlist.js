import React from 'react';
import Book from './Book';
import Sort from './Sort';

function Wishlist({ wishlist, setWishlist }) {

    let sortAlphabetically = wishlist.toSorted((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });

    let sortRatingDesc = wishlist.toSorted((a, b) => a.rating - b.rating);

    let sortRatingAsc = wishlist.toSorted((a, b) => b.rating - a.rating);
  
    let wishlistList = wishlist.map(book => <Book key={book.id} book={book} />)

    function handleSortAlphabetically() {
      wishlist = sortAlphabetically.map(book => <Book key={book.id} book={book} />)
      setWishlist(sortAlphabetically);
    }
  
    function handleSortRatingDesc() {
      wishlistList = sortRatingDesc.map(book => <Book key={book.id} book={book} />)
      setWishlist(sortRatingDesc)
    }

    function handleSortRatingAsc() {
      wishlistList = sortRatingAsc.map(book => <Book key={book.id} book={book} />)
      setWishlist(sortRatingAsc)
    }

  return (
    <div className="bg-slate-100 rounded-lg m-2">
        <h1 className="py-4 text-3xl font-bold">Wishlist</h1>
        <Sort 
          handleSortAlphabetically={handleSortAlphabetically} 
          handleSortRatingDesc={handleSortRatingDesc} 
          handleSortRatingAsc={handleSortRatingAsc}
        />
        <hr className="w-96 h-1 mx-auto my-1 bg-gray-200 border-0 rounded"></hr>
        <div className="container mx-auto p-2 grid grid-cols-2">
          {wishlistList}
        </div>
    </div>
  )
}

export default Wishlist