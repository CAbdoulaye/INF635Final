import React, { useState, useContext } from 'react'
import Employee from './Employee'
import '../products/styles.css';
import  EmployeeContext from '../context/EmployeeContext'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdRemoveCircleOutline } from "react-icons/io";


export default function Emp() {
  const { employeeList, addEmployeeToDB } = useContext(EmployeeContext)
  const [managerName, setManagerName] = useState("Jason Irving")
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState("")
  const [hourlyRate, setHourlyRate] = useState()
  const [hoursThisMonth, setHoursThisMonth] = useState()
  const [monday, setMonday] = useState("")
  const [tuesday, setTuesday] = useState("")
  const [wednesday, setWednesday] = useState("")
  const [thursday, setThursday] = useState("")
  const [friday, setFriday] = useState("")

  const AddWorker = () => {
    const emp = {
      name,
      managerName,
      position,
      phone,
      email,
      hourlyRate,
      hoursThisMonth,
      schedule: {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday
      }
    }
    addEmployeeToDB(emp)
    hideAddTask()
  }


  const showAddEmployee = () => {
    const minus = document.getElementById("minusButton")
    minus.style.display = "block"
    const myForm = document.getElementById("myForm")
    myForm.style.display = "block"
    const plus = document.getElementById("plusButton")
    plus.style.display = "none"
  }


  const hideAddTask = () => {
    const minus = document.getElementById("minusButton")
    minus.style.display = "none"
    const myForm = document.getElementById("myForm")
    myForm.style.display = "none"
    const plus = document.getElementById("plusButton")
    plus.style.display = "inline"
  }


  return (
    <div className='task-container'>
      <h1>Employees</h1>
      <IoAddCircleOutline id="plusButton" onClick={showAddEmployee} />
      <IoMdRemoveCircleOutline id="minusButton" onClick={hideAddTask} style={{display: "none"}} />
      <div id="myForm" style={{display: "none"}}>
        <form >
          <label>Name: 
            <input name="name" value={name} onChange={e => setName(e.target.value)}/>
          </label> <br />
          <label>Position: 
            <input name="position" value={position} onChange={e => setPosition(e.target.value)}/>
          </label> <br />
          <label>
            Manager:
            <select name="managerName" value={managerName} onChange={e => setManagerName(e.target.value)}>
              <option value="Jason Irving">Jason Irving</option>
              <option value="Sandra Jones">Sandra Jones</option>
            </select>
          </label>
          <br />
          <h3>Contact:</h3>
          <label>Phone: 
            <input name="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
          </label> <br />
          <label>Email: 
            <input name="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </label> <br />
          <h3>Pay:</h3>
          <label>Hourly Rate: 
          <input name="hourlyRate" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)}/>
          </label> <br />
          <label>Hours This Month: 
          <input name="hoursThisMonth" value={hoursThisMonth} onChange={e => setHoursThisMonth(e.target.value)}/>
          </label> <br />
          <h3>Schedule:</h3>
          <label>Monday: 
            <input name="monday" value={monday} onChange={e => setMonday(e.target.value)}/>
          </label> <br />
          <label>Tuesday: 
            <input name="tuesday" value={tuesday} onChange={e => setTuesday(e.target.value)}/>
          </label> <br />
          <label>Wednesday: 
            <input name="wednesday" value={wednesday} onChange={e => setWednesday(e.target.value)}/>
          </label> <br />
          <label>Thursday: 
            <input name="thursday" value={thursday} onChange={e => setThursday(e.target.value)}/>
          </label> <br />
          <label>Friday: 
            <input name="friday" value={friday} onChange={e => setFriday(e.target.value)}/>
          </label> <br />
        </form>
        <button onClick={AddWorker}>Add To Database</button>

      </div>
      <div className='productsDiv'>
        {employeeList.map((emp) => (
          <Employee key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  )
}