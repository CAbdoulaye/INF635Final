import React, { useContext } from 'react'
import Employee from './Employee'
import '../products/styles.css';
import  EmployeeContext from '../context/EmployeeContext'


export default function Emp() {
  const { employeeList } = useContext(EmployeeContext)

  return (
    <div>
      <button>New Employee</button>
      <div className='productsDiv'>
        {employeeList.map((emp) => (
          <Employee key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  )
}
