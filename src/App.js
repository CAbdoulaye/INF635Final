import { useState } from 'react';
import './App.css';
import AssignmentsData from './components/AssignmentsData';

import Assignments from './components/Assignments';

function App() {
  const [taskData, changeTaskData] = useState(AssignmentsData);
  const removeTask = (taskID) =>{
    changeTaskData(taskData.filter((task) => task.id !== taskID)); // remove element from array
  }

  const removeChildTask = (parentTaskID, taskID) =>{
    changeTaskData(
      taskData.map((task) => {
        if (task.id === parentTaskID) 
          task.subTasks = task.subTasks.filter((childTask) => childTask.id !== taskID)
        return task;
      }
      )
    ); // remove child element from array
  }

  const handleSubmit = (values) =>{
    changeTaskData([{
      id: (taskData[taskData.length - 1]).id + 1,
      title: values.taskName,
      description: values.taskDescription,
      completionStatus: values.taskCompletionStatus,
      removed: values.taskRemoved,
      subTasks: []
      }, ...taskData]);
  }
  const handleChildSubmit = (values) =>{
    changeTaskData(
      taskData.map((task) => {
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

  return (
    <div className="App">
      <h1>Welcome To My Assignment Manager</h1>
      <Assignments 
        AssignmentsData={taskData} 
        removedStatus={removeTask}
        removedChildStatus={removeChildTask}
        addTask={handleSubmit}
        addChildTask={handleChildSubmit}
      />
    </div>
  );
}

export default App;
