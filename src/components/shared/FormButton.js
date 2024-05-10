import React from 'react'

export default function FormButton(props) {
  return (
    <div className='row'>
      <button type="submit">{props.title}</button>
    </div>
  )
}
