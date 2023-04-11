import React from 'react'

function Book({ book }) {
    const {title, description, read, rating} = book;
    
  return (
    <div className="BookCard">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Read: {read ? "Yes" : "No"}</p>
        <p>Rating: {rating}/5</p>
    </div>
  )
}

export default Book