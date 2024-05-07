import React from 'react';
import AssignmentsData from './AssignmentsData';
import Assignment from './Assignment';


export default function Assignments() {
  const name = "Lebron James";
  return (
    <div>
      <span>Hello <b>{name}</b>, You have assignments to complete:</span>
      {AssignmentsData.map((assignment => (
        <Assignment 
          key = {assignment.id} 
          id = {assignment.id} 
          title = {assignment.title} 
          description= {assignment.description}
        />
      )))}
    </div>
  )
}