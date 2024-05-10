import React, { useContext } from 'react'
import ProductsContext from '../context/ProductsContext';

export default function FillDataBase() {
  const { productList} = useContext(ProductsContext);
  console.log(productList);
  return (
    <div>
      <h2>start</h2>
    </div>
  )
}
