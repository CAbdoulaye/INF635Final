import React from 'react'
import employeeData from './EmployeeData'

export default function Employee() {
  const randomValue = Math.floor(Math.random() * 3);
  const emp = employeeData[randomValue]
  return (
    <div>
      <h2>{emp.empName}</h2>
      <h3>Hours Workedd This Week: {emp.hoursWorkedThisWeek}</h3>
      <h3>Schedule: </h3>
      <p>Monday: {emp.schedule.monday}</p>
      <p>Tuesday: {emp.schedule.tuesday}</p>
      <p>Wednesday: {emp.schedule.wednesday}</p>
      <p>Thursday: {emp.schedule.thursday}</p>
      <p>Friday: {emp.schedule.friday}</p>
    </div>
  )
}
