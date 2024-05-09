import React, { useState, useContext } from 'react'
import Assignment from './Assignment';
import AddTask from './AddTask';
import SearchTask from './SearchTask'

import './styles.css'; // Import your CSS file
import TaskContext from '../context/TaskContext';


export default function Assignments() {
  const name = "John Doe";

  const [search, setSearch] = useState("");

  const { taskList } = useContext(TaskContext)
  console.log(taskList);

  const result = taskList.filter((task)=>
    task.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="assignments-container">
      <span>Hello <b>{name}</b>, You have assignments to complete:</span>
      <AddTask/>
      <br/>
      <br/>
      <SearchTask setSearch={setSearch}/>
      {result.map((assignment => (
        <Assignment 
          key = {assignment.id} 
          id = {assignment.id} 
          title = {assignment.title} 
          description= {assignment.description}
          completionStatus= {assignment.completionStatus}
          subTasks={assignment.subTasks}
        />
      )))}
    </div>
  )
}