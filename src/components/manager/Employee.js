import React from 'react'

export default function Employee({employee}) {
  return (
    <div className='worker-item'>
      <h3>{employee.employeeName}</h3>
      <p>Position: {employee.position}</p>
      <p>Hourly Rate: {employee.hourlyRate}</p>
      <p>Total Hours This Month: {employee.hoursThisMonth}</p>
      <p>Total Pay: ${employee.hourlyRate * employee.hoursThisMonth}</p>
    </div>
  )
}
