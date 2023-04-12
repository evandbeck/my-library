import React from 'react';
import Book from './Book';

function Wishlist({ wishlist }) {

    let wishlistList = wishlist.map(book => <Book key={book.id} book={book} />)

  return (
    <div>
        <h1>Wishlist</h1>
        {wishlistList}
    </div>
  )
}

export default Wishlist