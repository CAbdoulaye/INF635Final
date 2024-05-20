import React, {useContext, useState} from 'react'
import SearchTask from '../products/SearchTask';
import DatabaseContext from '../context/DatabaseContext'
import EditProduct from './EditProduct';

export default function EditProducts() { 

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
          <EditProduct 
            key={product.id}
            product={product}
          />
        )))}
      </div>
    </div>
  )
}