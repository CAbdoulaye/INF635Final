import { db } from '../../firebase'
import { addDoc, deleteDoc, doc, collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";


const DBTasksContext = createContext()

export const TaskContextProvider = ({children}) => {

  const [tasksList, setTasksList] = useState([])

  useEffect(() => {
    const fetchTask = async () => {
      try{
        const taskListRef = collection(db, "Tasks");
        const q = query(taskListRef, orderBy("priority"), limit(50));
        const querySnapShot = await getDocs(q)
        const tskList = querySnapShot.docs.map((doc) => {
            const dataWithId = doc.data();
            dataWithId.id = doc.id; // Merge the document ID into the data object
            return dataWithId;
          })
        console.log(tskList)
        setTasksList(tskList)
      }
      catch(err){
        console.error(err)
      }
    }
    fetchTask();
  }, [0])

  const addTaskToDatabase = async (task) => {

    console.log("Trying to add to database")
    console.log(task)
    try{
      const docRef = await addDoc(collection(db, "Tasks"), {
        title: task.title,
        assignedTo: task.worker,
        priority: task.priority,
        extra: task.extra,
      })
      console.log("added " + task.title + " to database")
      const newTask = {id: task.title, ...task}
      setTasksList([newTask, ...tasksList])
      console.log(tasksList)

    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }

  const deleteTaskFromDB = async (ID) => {
    console.log("Trying to delete task from database")
    console.log(ID)
    try{
      const res = await deleteDoc(doc(db, "Tasks", ID));
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
    setTasksList(tasksList.filter(task => task.id !== ID));
  }

  return (
    <DBTasksContext.Provider value={{ tasksList, addTaskToDatabase, deleteTaskFromDB }}>
      {children}
    </DBTasksContext.Provider>
  )
}

export default DBTasksContext;