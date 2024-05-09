import React, {useContext, useState} from 'react'
import ProductsContext from '../context/ProductsContext';
import Product from './Product';
import './styles.css';
import Cart from './Cart';
import SearchTask from './SearchTask';


export default function Products() {

  const { productList, taskCompleted, showAddedToCartMessage} = useContext(ProductsContext);
  const [searchByCategory, setSearchByCategory]  = useState("");

  const result = productList.filter((product)=>
    product.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  

  return (
    <div>
      <SearchTask
        setSearchByCategory={setSearchByCategory}
      />
      <h2>Products:</h2>
      {showAddedToCartMessage && (
                <p style={{ color: 'green' }}>Added to Cart!</p>
      )}
      <div className='productsDiv'>
        {result.map((product => (
          <Product 
            key={product.id}
            product={product}
          />
        )))}
      </div>
    </div>
  )
}
