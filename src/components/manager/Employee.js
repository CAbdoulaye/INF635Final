import React, {useState, useContext} from 'react'
import  EmployeeContext from '../context/EmployeeContext'
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


export default function Employee({employee}) {

  const { addEmployeeToDB, deleteEmployee, saveWorkerToDB } = useContext(EmployeeContext)

  const [managerName, setManagerName] = useState(employee.managerName)
  const [Empname, setEmpname] = useState(employee.name);
  const [position, setPosition] = useState(employee.position);
  const [phone, setPhone] = useState(employee.phone);
  const [email, setEmail] = useState(employee.email);
  const [hourlyRate, setHourlyRate] = useState(employee.hourlyRate);
  const [hoursThisMonth, setHoursThisMonth] = useState(employee.hoursThisMonth);
  const [mondayHours, setMondayHours] = useState(employee.schedule.monday);
  const [tuesdayHours, setTuesdayHours] = useState(employee.schedule.tuesday);
  const [wednesdayHours, setWednesdayHours] = useState(employee.schedule.wednesday);
  const [thursdayHours, setThursdayHours] = useState(employee.schedule.thursday);
  const [fridayHours, setFridayHours] = useState(employee.schedule.friday);

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

  const cleaned = ('' + phone).replace(/\D/g, '');
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

  const deleteWorker = () => {
    deleteEmployee(employee.id)
  }
  const saveWorker = () => {
    const schedule = {
      monday: mondayHours,
      tuesday: tuesdayHours,
      wednesday: wednesdayHours,
      thursday: thursdayHours,
      friday: fridayHours,
    }
    saveWorkerToDB(employee.id, Empname, managerName, position, phone, email, hourlyRate, hoursThisMonth, schedule)
    editWorker()
  }
  const editWorker = () => {
    console.log("trying to edit worker")
    const myItem = document.getElementById("item" + employee.id)
    const myForm = document.getElementById("myForm" + employee.id)

    if(myItem.style.display != "none"){
      myItem.style.display = "none"
      myForm.style.display = "block"
    }
    else {
      myItem.style.display = "block"
      myForm.style.display = "none"
    }
  }

  return (
    <div className='task-item'>
      <div id={"item" + employee.id} >
      <h3>{Empname}</h3>
      <p>Position: {position}</p>
      <p>Manager: {managerName}</p>
      <button onClick={showContact}>Contact</button>
      <button onClick={showPay}>Pay</button>
      <button onClick={showSchedule}>Schedule</button>
      <div id={employee.id + "contact"} style={{display: "none"}}>
        <p>Phone:  {formatted}</p>
        <p>Email:  {email}</p>
      </div>

      <div id={employee.id + "pay"} style={{display: "none"}}>
      <p>Hourly Rate: {hourlyRate}</p>
      <p>Total Hours This Month: {hoursThisMonth}</p>
      <p>Total Pay: ${hourlyRate * hoursThisMonth}</p>
      </div>

      <div id={employee.id + "schedule"} style={{display: "none"}}>
      <p>Monday: {mondayHours}</p>
      <p>Tuesday: {tuesdayHours}</p>
      <p>Wednesday: {wednesdayHours}</p>
      <p>Thursday: {thursdayHours}</p>
      <p>Friday: {fridayHours}</p>
      </div>
      </div>
      <div id={"myForm"+employee.id} style={{display: "none"}}>
      <form>
        <label>
          Name:
          <input name="name" value={Empname} onChange={e => setEmpname(e.target.value)}/>
        </label>
        <br />
        <label>
          Position:
          <input name="position" value={position} onChange={e => setPosition(e.target.value)} />
        </label>
        <br />
        <label>
          Manager's Name:
          <input  name="managerName" value={managerName} onChange={e => setManagerName(e.target.value)} />
        </label>        
        <br />
        <label>
          Phone:
          <input name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input  name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Hourly Rate:
          <input  name="hourlyRate" value={hourlyRate} onChange={e => setHourlyRate(e.target.value)} />
        </label>
        <br />
        <label>
          Hours This Month:
          <input  name="hoursThisMonth" value={hoursThisMonth} onChange={e => setHoursThisMonth(e.target.value)} />
        </label>
        <br />
        <label>
          Monday Hours:
          <input name="mondayHours" value={mondayHours} onChange={e => setMondayHours(e.target.value)} />
        </label>
        <br />
        <label>
          Tuesday Hours:
          <input  name="tuesdayHours" value={tuesdayHours} onChange={e => setTuesdayHours(e.target.value)} />
        </label>
        <br />
        <label>
          Wednesday Hours:
          <input  name="wednesdayHours" value={wednesdayHours} onChange={e => setWednesdayHours(e.target.value)} />
        </label>
        <br />
        <label>
          Thursday Hours:
          <input name="thursdayHours" value={thursdayHours} onChange={e => setThursdayHours(e.target.value)} />
        </label>
        <br />
        <label>
          Friday Hours:
          <input  name="fridayHours" value={fridayHours} onChange={e => setFridayHours(e.target.value)} />
        </label>
      </form>
      <FaCheck onClick={saveWorker}/>
      <br />
      </div>
      <MdDeleteOutline onClick={deleteWorker} />
      <MdEdit onClick={editWorker}/>




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