import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Product from '../components/products/Product'
import ProductsContext from '../components/context/ProductsContext';

export default function Home() {
  const { productList } = useContext(ProductsContext);
  const randomValue = Math.floor(Math.random() * 30); // 31 to include 30 as a possible value

  return (
    <div>
      <section id="products">
        <h2>Featured Products</h2>
        <Link to="/products">  
        <Product key={productList[randomValue].id} product={productList[randomValue]}/>
        </Link>  
        <div className="product-grid">
          <Link to="/products">              
            <Product key={productList[(randomValue + 3)%30].id} product={productList[(randomValue + 3)%30]}/>
          </Link>
          <div className="product-card">
            <Link to="/products"> 
              <img src={"/images/" + productList[(randomValue + 7)%30].imageURL} alt="Product 15" />
              </Link>
              <h3>{((randomValue + 7)%30).name}</h3>
              <span>{((randomValue + 7)%30).price}</span>
              <Link to="/products"> 
              <button >View Products</button>
              </Link>
          </div>
          <Link to="/products"> 
          <Product key={productList[((randomValue + 14)%30)].id} product={productList[(randomValue + 14)%30]}/>
          </Link>
          <Link to="/products"> 
          <Product key={productList[((randomValue + 26)%30)].id} product={productList[((randomValue + 26)%30)]}/>
          </Link>
        </div>
    </section>
    <section id="about">
        <h2>About Us</h2>
        <p>Welcome to TechZone, your one-stop shop for the latest tech gadgets.</p>
    </section>
    <section id="contact">
        <h2>Contact Us</h2>
        <p>For any inquiries or assistance, please reach out to us at info@techzone.com.</p>
    </section>
    </div>
  )
}
