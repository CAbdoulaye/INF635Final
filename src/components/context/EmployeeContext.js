//Jason123
//Jason.irving@gmail.com

import { db } from '../../firebase'
import { addDoc, deleteDoc, doc, collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

const DBEmployeeContext = createContext()

export const EmployeeContextProvider = ({children}) => {

  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    const fetchTask = async () => {
      try{
        const taskListRef = collection(db, "Employees");
        const q = query(taskListRef, orderBy("name"), limit(50));
        const querySnapShot = await getDocs(q)
        const empList = querySnapShot.docs.map((doc) => {
            const dataWithId = doc.data();
            dataWithId.id = doc.id; // Merge the document ID into the data object
            return dataWithId;
          })
        console.log(empList)
        setEmployeeList(empList)
      }
      catch(err){
        console.error(err)
      }
    }
    fetchTask();
  }, [0])

  const addEmployeeToDB = async (employee) => {
    console.log("trying to add  employee to DB")
    console.log(employee)
    try{
      const docRef = await addDoc(collection(db, "Employees"), {
        name: employee.name,
        hourlyRate: employee.hourlyRate,
        hoursThisMonth: employee.hoursThisMonth,
        managerName: employee.managerName,
        email: employee.email,
        phone: employee.phone,
        position: employee.position,
        schedule: employee.schedule,
      })
      console.log("added " + employee.name + " to database")
      // const newTask = {id: task.title, ...task}
      // setTasksList([newTask, ...tasksList])
      // console.log(tasksList)
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }

  return (
    <DBEmployeeContext.Provider value={{ employeeList, addEmployeeToDB }}>
      {children}
    </DBEmployeeContext.Provider>
  )
}

export default DBEmployeeContext;