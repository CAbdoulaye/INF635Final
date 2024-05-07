import React from 'react'

export default function Assignment({id, title, description}) {
  return (
    <div>
      <h3>{id} {title}</h3>
      <p>{description}</p>
    </div>
  )
}