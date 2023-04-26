import React from 'react';
import Book from './Book';

function Wishlist({ wishlist }) {

    let wishlistList = wishlist.map(book => <Book key={book.id} book={book} />)

  return (
    <div>
        <h1 className="py-4 text-3xl font-bold">Wishlist</h1>
        {wishlistList}
    </div>
  )
}

export default Wishlist