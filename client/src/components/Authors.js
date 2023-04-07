import React from 'react';

function Authors({ authors }) {
    console.log(authors);
    let authorsList = authors.map(author => <div>{author.name}</div>)
  return (
    <div>
        <h1>Authors</h1>
        {authorsList}
    </div>
  )
}

export default Authors