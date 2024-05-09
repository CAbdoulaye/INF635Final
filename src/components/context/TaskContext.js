import { useState, createContext } from "react";
import AssignmentsData from "../Task/AssignmentsData"

const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [taskList, setTaskList] = useState(AssignmentsData)
  const removeTask = (taskID) =>{
    setTaskList(taskList.filter((task) => task.id !== taskID)); // remove element from array
  }
  const addChildTask = (values) =>{
    setTaskList(
      taskList.map((task) => {
        if (task.id === values.parentID) {
          const taskid = task.subTasks.length == 0 ? 0 : task.subTasks[task.subTasks.length - 1].id + 1;
          task.subTasks = [{
            id: taskid,
            parentId: values.parentID,
            title: values.taskName,
            description: values.taskDescription,
            completionStatus: values.taskCompletionStatus,
            removed: values.taskRemoved,
          }, ...task.subTasks]
        }
        return task;
      }
      )
    )
  }

  const removeChildTask = (parentTaskID, taskID) =>{
    setTaskList(
      taskList.map((task) => {
        if (task.id === parentTaskID) 
          task.subTasks = task.subTasks.filter((childTask) => childTask.id !== taskID)
        return task;
      }
      )
    ); // remove child element from array
  }

  const addTask = (values) =>{
    setTaskList([{
      id: (taskList[taskList.length - 1]).id + 1,
      title: values.taskName,
      description: values.taskDescription,
      completionStatus: values.taskCompletionStatus,
      removed: values.taskRemoved,
      subTasks: []
      }, ...taskList]);
  }

  return(<TaskContext.Provider value={{taskList, removeTask, addTask, removeChildTask, addChildTask}}>{children}</TaskContext.Provider>)
}

export default TaskContext;