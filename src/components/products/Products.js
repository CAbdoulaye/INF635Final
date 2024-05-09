import React, {useContext} from 'react'
import ProductsContext from '../context/ProductsContext';
import Product from './Product';

export default function Products() {

  const { productList } = useContext(ProductsContext);

  return (
    <div>
      <h2>Products:</h2>
      {productList.map((product => (
        <Product 
          key={product.id}
          product={product}
        />
      )))}
    </div>
  )
}
