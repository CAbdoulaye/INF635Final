import React from 'react'
import employeeData from './employeeData'
import Employee from './Employee'
import './task.css';


export default function Employees() {
  return (
    <div>
      <div className='manager-container'>
        {employeeData.map((emp) => {
          <Employee key={emp.id} employee={emp} />
        })}
      </div>
    </div>
  )
}
