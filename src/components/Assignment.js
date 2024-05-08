import { useState } from 'react'
import AddSubTasks from './AddSubTasks';
import ShowSubTasks from './ShowSubTasks';
import './styles.css'; // Import your CSS file


export default function Assignment({id, title, description, completionStatus, removedStatus, subTasks, removedChildStatus, addChildTask}) {
  const removeButton = () =>{
    removedStatus(id);
  }
  return (
    <div className="assignment">
      <h3>{title}</h3>
      <p>{description}</p>
      <label htmlFor="scales">
        Completed
        <input type="checkbox" id="scales" name="scales"  />
      </label>
      
      <br/>
      <label htmlFor="scales">
        Remove: 
        <input type="submit" value="X" onClick={removeButton}/>
      </label>
      <div className='card-container'>
        {subTasks.map((subtask => (
          <ShowSubTasks
            key = {subtask.id} 
            parentId = {subtask.parentId} 
            id = {subtask.id} 
            title = {subtask.title} 
            description= {subtask.description}
            completionStatus= {subtask.completionStatus}
            removedStatus={removedStatus}
            removedChildStatus={removedChildStatus}
          />
        )))
        }
      </div>
      <AddSubTasks id={id} addChildTask={addChildTask}/>
    </div>
  )

}