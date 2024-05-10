import React from 'react'

export default function FormInput(props) {
  return (
    <div className='row'>
      <label>{props.description}
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={props.className}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </div>
  )
}
