import React from 'react'
import './styles.css';

export default function showSubTasks({parentId, id, title, description, completionStatus, subTasks, removedChildStatus}){
  const removedChild = () =>{
    removedChildStatus(parentId, id);
  }
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <label htmlFor="scales">
        Completed
        <input type="checkbox" id="scales" name="scales"  />
      </label>
      
      <br/>
      <label htmlFor="scales">
        Remove: 
        <input type="submit" value="X" onClick={removedChild}/>
      </label>
    </div>
  )
}

