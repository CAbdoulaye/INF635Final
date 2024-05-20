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
import SignIn from './pages/SignIn';
import { AuthContextProvider } from './components/context/AuthContext';
import EmployeesPage from './pages/EmployeesPage'
import EmployeePage from './pages/EmployeePage'
// import FillDatabase from './pages/FillDatabase';
import  {ProductContextProvider} from './components/context/DatabaseContext';
import TasksPage from './pages/TasksPage';
import OrdersPage from './pages/OrdersPage';
import EditProductsPage from './pages/EditProductsPage';

export default function App() {
  return (
    <ProductContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/thankYou" element={<ThankYouPage/>}/>
          <Route path="/employees" element={<EmployeesPage/>}/>
          <Route path="/employee" element={<EmployeePage/>}/>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/orders" element={<OrdersPage/>}/>
          <Route path="/edit" element={<EditProductsPage/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthContextProvider>
    </ProductContextProvider>
  );
}
