import React, {useState, useContext} from 'react'
import  EmployeeContext from '../context/EmployeeContext'

export default function Employee({employee}) {

  const { addEmployeeToDB } = useContext(EmployeeContext)

  const [managerName, setManagerName] = useState("Jason Irving")

  // const AddWorker = () => {
  //   const min = 6666666666;
  //   const max = 9999999999;
  //   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  //   const emailAdress = employee.employeeName.replace(/\s+/g, ".") + "@gmail.com";

  //   const emp = {
  //     name: employee.employeeName,
  //     hourlyRate: employee.hourlyRate,
  //     position: employee.position,
  //     hoursThisMonth: employee.hoursThisMonth,
  //     phone: randomNumber,
  //     email: emailAdress,
  //     schedule: employee.schedule,
  //     managerName: managerName
  //   }
  //   addEmployeeToDB(emp)
  // }

  // const monday = employee.schedule[monday]

  const cleaned = ('' + employee.phone).replace(/\D/g, '');
  const regex = /^(\d{3})(\d{3})(\d{4})$/;
  const formatted = cleaned.replace(regex, '($1) $2-$3');

  const showContact = () => {
    const myContact = document.getElementById(employee.id + "contact")
    if (myContact.style.display !== "none")
      myContact.style.display = "none"
    else
      myContact.style.display = "block"
  }
  const showPay = () => {
    const myPay = document.getElementById(employee.id + "pay")
    if (myPay.style.display !== "none")
      myPay.style.display = "none"
    else
    myPay.style.display = "block"
  }
  const showSchedule = () => {
    const mySchedule = document.getElementById(employee.id + "schedule")
    if (mySchedule.style.display !== "none")
      mySchedule.style.display = "none"
    else
    mySchedule.style.display = "block"
  }

  return (
    <div className='worker-item'>
      <h3>{employee.name}</h3>
      <p>Position: {employee.position}</p>
      <p>Manager: {employee.managerName}</p>
      <button onClick={showContact}>Contact</button>
      <button onClick={showPay}>Pay</button>
      <button onClick={showSchedule}>Schedule</button>
      <div id={employee.id + "contact"} style={{display: "none"}}>
        <p>Phone:  {formatted}</p>
        <p>Email:  {employee.email}</p>
      </div>

      <div id={employee.id + "pay"} style={{display: "none"}}>
      <p>Hourly Rate: {employee.hourlyRate}</p>
      <p>Total Hours This Month: {employee.hoursThisMonth}</p>
      <p>Total Pay: ${employee.hourlyRate * employee.hoursThisMonth}</p>
      </div>

      <div id={employee.id + "schedule"} style={{display: "none"}}>
      <p>Monday: {employee.schedule.monday}</p>
      <p>Tuesday: {employee.schedule.tuesday}</p>
      <p>Wednesday: {employee.schedule.wednesday}</p>
      <p>Thursday: {employee.schedule.thursday}</p>
      <p>Friday: {employee.schedule.friday}</p>
      </div>

      {/* <form >
        <label>
          Manager:
          <select name="managerName" value={managerName} onChange={e => setManagerName(e.target.value)}>
            <option value="Jason Irving">Jason Irving</option>
            <option value="Sandra Jones">Sandra Jones</option>
          </select>
        </label>
        <br />
      </form>
      <button onClick={AddWorker}>Add To Database</button> */}

    </div>
  )
}