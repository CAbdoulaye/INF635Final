import React, {useContext, useState} from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdRemoveCircleOutline } from "react-icons/io";

import TasksContext from '../context/TasksContext'


export default function NewTask() {
  const { addTaskToDatabase } = useContext(TasksContext);
  const [title, setTitle] = useState("")
  const [worker, setWorker] = useState("")
  const [extra, setExtra] = useState("")
  const [priority, setPriority] = useState("High")

  const showAddTask = () => {
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

  const addTask = async(e) => {
    e.preventDefault();
    console.log(title)
    console.log(worker)
    console.log(extra)
    console.log(priority)

    // Reset form fields after adding the task
    setTitle("");
    setWorker("");
    setExtra("");
    setPriority("High");

    addTaskToDatabase({title, worker, priority, extra})

    hideAddTask()
  }

  return (
    <div>
      <span>
        <IoAddCircleOutline id="plusButton" onClick={showAddTask} />
        <IoMdRemoveCircleOutline id="minusButton" onClick={hideAddTask} style={{display: "none"}} />
      </span>
      <form id="myForm" onSubmit={addTask} style={{display: "none"}}>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Task Title"/>
        </label>
        <br />

        <label>
          Assigned To:
          <input type="text" name="setWorker" value={worker} onChange={e => setWorker(e.target.value)} />
        </label>
        <br />

        <label>
          Extra Info:
          <input type="text" name="extra" value={extra} onChange={e => setExtra(e.target.value)}/>
        </label>
         <br />

        <label>
          Priority:
          <select name="priority" value={priority} onChange={e => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
