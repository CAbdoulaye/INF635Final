import React, { useContext, useState } from 'react'
import TasksContext from '../context/TasksContext'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";





export default function Task({task}) {
  const { deleteTaskFromDB, saveTaskToDB } = useContext(TasksContext);
  const [title, setTitle] = useState(task.title)
  const [extra, setExtra] = useState(task.extra)
  const [priority, setPriority] = useState(task.priority)
  const [assignedTo, setAssignedTo] = useState(task.assignedTo)

  const deleteTask = () => {
    console.log("trying to delete task")
    console.log(task.title)
    deleteTaskFromDB(task.id)
  }
  const editTask = () => {
    console.log("trying to edit task")
    const myItem = document.getElementById("item" + task.title)
    const myForm = document.getElementById("myForm" + task.title)

    if(myItem.style.display != "none"){
      myItem.style.display = "none"
      myForm.style.display = "block"
    }
    else {
      myItem.style.display = "block"
      myForm.style.display = "none"
    }
  }
  const saveTask = () => {
    console.log("saving task")
    saveTaskToDB(task.id, title, extra, priority, assignedTo)
    editTask()
  }

  return (
    <div className='task-item'>
      <div id={"item" + task.title}>
        <h3>{title}</h3>
        <p>{extra}</p>
        <p>Priority: {priority}</p>
        <p>Assigned to {task.assignedTo}</p>
      </div>
      <div id={"myForm"+task.title} style={{display: "none"}}>
      <form>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Task Title"/>
        </label>
        <br />
        <label>
          Extra:
          <input type="text" name="extra" value={extra} onChange={e => setExtra(e.target.value)} placeholder="Enter Extra Info"/>
        </label>
        <br />
        <label>
          Priority:
          <input type="text" name="priority" value={priority} onChange={e => setPriority(e.target.value)}/>
        </label>
        <br />
        <label>
          Assigned To:
          <input type="text" name="assignedTo" value={assignedTo} onChange={e => setAssignedTo(e.target.value)}/>
        </label>
        <br />
      </form>
      <FaCheck onClick={saveTask}/>
      <br />
      </div>
      <FaTrashAlt onClick={deleteTask} />
      <FaEdit onClick={editTask} />
    </div>
  )
}
