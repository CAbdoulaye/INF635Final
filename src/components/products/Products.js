import React, {useContext, useState} from 'react'
import Product from './Product';
import './styles.css';
import SearchTask from './SearchTask';
import DatabaseContext from '../context/DatabaseContext'

export default function Products() { 

  const { FruitsDataList } = useContext(DatabaseContext);

  const [searchByCategory, setSearchByCategory]  = useState("");

  const result = FruitsDataList.filter((product)=>
    product.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  
  return (
    <div>
      <SearchTask
        setSearchByCategory={setSearchByCategory}
      />
      <h2>Products:</h2>
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