import React from 'react'

export default function Task({task}) {
  return (
    <div className='task-item'>
      <h3>{task.title}</h3>
      <p>{task.extra}</p>
      <p>Priority: {task.priority}</p>
      <p>Assigned to {task.worker}</p>
    </div>
  )
}
