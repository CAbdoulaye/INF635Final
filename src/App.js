import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
import { ProductsProvider } from './components/context/ProductsContext';

export default function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ProductsProvider>
  );
}
