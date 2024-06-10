import React, {useContext} from 'react'
import TasksContext from '../context/TasksContext'
import Task from './Task'
import './task.css';
import NewTask from './NewTask';


export default function Tasks() {
  const { tasksList } = useContext(TasksContext);

  return (
    <div className='task-container'>
      <h1>Task Management</h1>
      <NewTask>

      </NewTask>
      {tasksList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}
