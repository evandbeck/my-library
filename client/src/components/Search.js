import React from 'react'

function Search({ search, setSearch }) {

  return (
    <div className="">
      <label className="font-semibold">Search Library:</label>
      <input className="border-2 border-slate-10 rounded-lg ml-2"
        type="text" id="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Search