import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



export default function AddTask({addTask}) {
  const formik = useFormik({
    initialValues: {
      taskName: "",
      taskDescription: "",
      taskCompletionStatus: "False",
      taskRemoved: false,
      taskSubTasks: {}
    },

    validationSchema: Yup.object({
      taskName: Yup.string().max(10, "Title Cannot Contain Over 10 Caracters").required("Title is Required"),
      taskDescription: Yup.string().max(50, "Description Cannot Contain Over 50 Caracters").required("Description is Required")
    }),

    onSubmit: (values) =>{
      addTask(values);
    }
  });
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <h3>Add Tasks</h3>
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
    </form>
    </div>
  )
}

