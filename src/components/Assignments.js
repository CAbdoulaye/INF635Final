import React, { useState } from 'react'
import AssignmentsData from './AssignmentsData';
import Assignment from './Assignment';
import './styles.css'; // Import your CSS file


export default function Assignments() {
  const name = "John Doe";
  const [changesMade, setChanges] = useState(0); 
  const AddElement = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const elementId = AssignmentsData.length + 1;
    const elementTitle = document.getElementById("taskName").value;
    const elementDescription = document.getElementById("taskDescription").value;
    const elementCompletionStatus = "False";
  
    AssignmentsData.push({
      id: elementId,
      title: elementTitle,
      description: elementDescription,
      completionStatus: elementCompletionStatus
    });    
    setChanges(changesMade + 1);
  }
  return (
    <div className="assignments-container">
      <span>Hello <b>{name}</b>, You have assignments to complete:</span>
      <div>
      <form>
        <h3>Add Tasks</h3>
        <label htmlFor="taskName">Task Name:</label><br/>
        <input type="text" id="taskName" name="taskName"/><br/>
        <label htmlFor="taskDescription">Description:</label><br/>
        <input type="text" id="taskDescription" name="taskDescription"/><br/>
        <input type="submit" value="Add" onClick={AddElement}></input>
      </form>
      </div>
      {AssignmentsData.map((assignment => (
        <Assignment 
          key = {assignment.id} 
          title = {assignment.title} 
          description= {assignment.description}
          completionStatus= {assignment.completionStatus}
        />
      )))}
    </div>
  )
}