import { useContext } from 'react'
import './styles.css';
import TaskContext from '../context/TaskContext';


export default function ShowSubTasks({parentId, id, title, description, completionStatus}){
  const { removeChildTask } = useContext(TaskContext);
  const removedChild = () =>{
    removeChildTask(parentId, id);
  }

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <label htmlFor="scales">
        Completed
        <input type="checkbox" id="scales" name="scales"  />
      </label>
      
      <br/>
      <label htmlFor="scales">
        Remove: 
        <input type="submit" value="X" onClick={removedChild}/>
      </label>
    </div>
  )
}

