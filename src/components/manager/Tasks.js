import React from 'react'
import TasksData from './TasksData'
import Task from './Task'
import './task.css';

export default function Tasks() {
  return (
    <div className='task-container'>
      <h1>Task Management</h1>
      {TasksData.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}
