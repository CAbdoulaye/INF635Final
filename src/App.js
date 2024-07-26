import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//CSS
import './App.css';

//Pages
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ThankYouPage from './pages/ThankYouPage';
import SignIn from './pages/SignIn';
import EmployeesPage from './pages/EmployeesPage'
import EmployeePage from './pages/EmployeePage'
import TasksPage from './pages/TasksPage';
import OrdersPage from './pages/OrdersPage';
import EditProductsPage from './pages/EditProductsPage';
import ReportPage from './pages/ReportPage';
import PrintPage from './pages/PrintPage';


//Contexts
import { ProductContextProvider } from './components/context/DatabaseContext';
import { AuthContextProvider } from './components/context/AuthContext';
import { TaskContextProvider } from './components/context/TasksContext';
import { EmployeeContextProvider } from './components/context/EmployeeContext';
import { ManagerContextProvider } from './components/context/ManagerContext';
import { CustomerContextProvider } from './components/context/CustomerContext';
import { CartContextProvider } from './components/context/CartContext';
import { OrderContextProvider } from './components/context/OrderContext';
import { ReportContextProvider } from './components/context/ReportContext';

export default function App() {
  return (
    <ProductContextProvider>
    <AuthContextProvider>
    <TaskContextProvider>
    <EmployeeContextProvider>
    <ManagerContextProvider>
    <CustomerContextProvider>
    <CartContextProvider>
    <OrderContextProvider>
    <ReportContextProvider>
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
          <Route path="/report" element={<ReportPage/>}/>
          <Route path="/print" element={<PrintPage/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ReportContextProvider>
    </OrderContextProvider>
    </CartContextProvider>
    </CustomerContextProvider>
    </ManagerContextProvider>
    </EmployeeContextProvider>
    </TaskContextProvider>
    </AuthContextProvider>
    </ProductContextProvider>
  );
}
