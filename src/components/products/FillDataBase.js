import React, { useContext } from 'react'
import FillDatabaseItem from './FillDatabaseItem';
import DatabaseContext from '../context/DatabaseContext'

export default function FillDataBase() {
  const {FruitsDataList} = useContext(DatabaseContext)
  return (
    <div>
      <h2>start</h2>
      {FruitsDataList.map((product => (
      <FillDatabaseItem key={product.id} product={product} />
      )))}
    </div>
  )
}
