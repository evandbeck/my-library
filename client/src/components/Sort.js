import React from 'react'

function Sort({ handleSortAlphabetically, handleSortRatingDesc, handleSortRatingAsc }) {

  return (
    <div className="flex justify-center items-center">
        <h1 className="mr-2 font-semibold">Sort by:</h1>
        <button className="bg-slate-200 hover:bg-slate-300 rounded-md p-2 m-1 w-[40px] text-sm font-semibold"
          onClick={handleSortAlphabetically}>A</button>
        <button className="bg-slate-200 hover:bg-slate-300 rounded-md p-2 m-1 w-[40px] text-sm font-semibold"
          onClick={handleSortRatingDesc}>+</button>
        <button className="bg-slate-200 hover:bg-slate-300 rounded-md p-2 m-1 w-[40px] text-sm font-semibold"
          onClick={handleSortRatingAsc}>-</button>
    </div>
  )
}

export default Sort