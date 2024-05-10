import React, { useContext } from 'react'
import FillDatabaseItem from './FillDatabaseItem';
import meat from './meatData';

export default function FillDataBase() {
  const FruitsDataList = meat
  return (
    <div>
      <h2>start</h2>
      {FruitsDataList.map((product => (
      <FillDatabaseItem key={product.id} product={product} />
      )))}
    </div>
  )
}
