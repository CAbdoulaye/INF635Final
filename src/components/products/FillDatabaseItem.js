import React, { useContext } from 'react'
import DatabaseContext from '../context/DatabaseContext'

export default function FillDatabaseItem({product}) {
  const { addToDatabase } = useContext(DatabaseContext)

  const handleClick = () => {
    addToDatabase(product);
  }
  return (
    <div>
      <p>{product.name}</p>
      <button onClick={handleClick}>add to database</button>
    </div>
  )
}
