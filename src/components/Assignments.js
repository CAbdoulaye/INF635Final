import React, { useState } from 'react'
import Assignment from './Assignment';
import AddTask from './AddTask';

import './styles.css'; // Import your CSS file


export default function Assignments({ AssignmentsData, removedStatus, addTask, removedChildStatus, addChildTask }) {
  const name = "John Doe";

  return (
    <div className="assignments-container">
      <span>Hello <b>{name}</b>, You have assignments to complete:</span>
      <AddTask addTask={addTask}/>
      {AssignmentsData.map((assignment => (
        <Assignment 
          key = {assignment.id} 
          id = {assignment.id} 
          title = {assignment.title} 
          description= {assignment.description}
          completionStatus= {assignment.completionStatus}
          removedStatus={removedStatus}
          subTasks={assignment.subTasks}
          removedChildStatus={removedChildStatus}
          addChildTask={addChildTask}
        />
      )))}
    </div>
  )
}