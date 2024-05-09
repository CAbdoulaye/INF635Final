import React from 'react'

export default function SearchTask({ setSearch }) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="taskNameSeach">
        Search Task: 
        <input  
          type="text" 
          id="taskNameSeach" 
          name="taskNameSeach" 
          placeholder="Search Task by Title"
          role="searchbox"
          onChange={(e)=>{setSearch(e.target.value)}}
        />
      </label>
      </form>
    </div>
  )
}
