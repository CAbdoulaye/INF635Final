import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TaskContext from '../context/TaskContext';


export default function AddSubTasks({id}) {

  const { addChildTask } = useContext(TaskContext)

  const subTaskId = "subTaskId" + id;
  const subTaskButtonId = "subTaskButtonId" + id;
  let buttonTrigerred = false;
  const viewAddSubTask = () =>{
    const myDiv = document.getElementById(subTaskId);
    const myButton = document.getElementById(subTaskButtonId);
    if(buttonTrigerred == false){
      myDiv.style.display = 'block';
      myButton.innerHTML = "Cancel";
      buttonTrigerred = true;
    }
    else{
      myDiv.style.display = 'none';
      myButton.innerHTML = "Add Sub-Tasks";
      buttonTrigerred = false;
    }
  }
  const formik = useFormik({
    initialValues: {
      parentID: id,
      taskName: "",
      taskDescription: "",
      taskCompletionStatus: false,
      taskRemoved: false,
    },

    validationSchema: Yup.object({
      taskName: Yup.string().max(10, "Title Cannot Contain Over 10 Caracters").required("Title is Required"),
      taskDescription: Yup.string().max(50, "Description Cannot Contain Over 50 Caracters").required("Description is Required")
    }),

    onSubmit: (values) =>{
      addChildTask(values);
    }
  });
  return (
    <div>
      <button className='addSubClassBTN' id={subTaskButtonId} onClick={viewAddSubTask}>Add Sub-Tasks</button>
    <form onSubmit={formik.handleSubmit}>
      <div className='SubTasks' id={subTaskId}>
      <h3>Add Sub-Tasks</h3>
      <label htmlFor="taskName">
        {formik.errors.taskName ? formik.errors.taskName :"Task Name: "}
        <input 
          type="text" 
          id="taskName" 
          name="taskName" 
          placeholder="Enter Task Titile" 
          onChange={formik.handleChange}
        /><br/>
      </label><br/>
      
      <label htmlFor="taskDescription">
      {formik.errors.taskDescription ? formik.errors.taskDescription :"Description: "}
        <input 
          type="text" 
          id="taskDescription" 
          name="taskDescription" 
          placeholder="Enter Task Description" 
          onChange={formik.handleChange}
        /><br/>
      </label><br/>
      <input type="submit" value="Add"></input>
    </div>
    </form>
    </div>
  )
}
