import { useState } from 'react'
import './styles.css'; // Import your CSS file


export default function Assignment({title, description, completionStatus}) {
  const [removed, setRemoved] = useState("False");
  if (removed !== "True"){
    return (
      <div className="assignment">
        <h3>{title}</h3>
        <p>{description}</p>
        <label for="scales">Completed</label>
        <input type="checkbox" id="scales" name="scales"/>
        <br/>
        <label for="scales">Remove: </label>
        <input type="submit" value="X" onClick={() =>{setRemoved("True")}}/>
      </div>
    )
  }
  else{
    return (<div></div>)
  }

}