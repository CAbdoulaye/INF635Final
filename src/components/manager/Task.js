import React, { useContext, useState } from 'react'
import TasksContext from '../context/TasksContext'
import { FaTrashAlt } from "react-icons/fa";



export default function Task({task}) {
  const { deleteTaskFromDB } = useContext(TasksContext);

  const deleteTask = () => {
    console.log("trying to delete task")
    console.log(task.title)
    console.log(task.id)
    deleteTaskFromDB(task.id)
  }

  return (
    <div className='task-item'>
      <h3>{task.title}</h3>
      <p>{task.extra}</p>
      <p>Priority: {task.priority}</p>
      <p>Assigned to {task.assignedTo}</p>
      <FaTrashAlt onClick={deleteTask} />
    </div>
  )
}
