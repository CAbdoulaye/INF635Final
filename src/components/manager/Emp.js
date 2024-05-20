import React from 'react'
import employeeData from './employeeData'
import Employee from './Employee'
import '../products/styles.css';


export default function Emp() {
  console.log("employeeData")
  console.log(employeeData)
  return (
    <div>
      <div className='productsDiv'>
        {employeeData.map((emp) => (
          <Employee key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  )
}
