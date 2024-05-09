import React from 'react';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
import ThankYouPage from './pages/ThankYouPage';
import { ProductsProvider } from './components/context/ProductsContext';

export default function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/thankYou" element={<ThankYouPage/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ProductsProvider>
  );
}
