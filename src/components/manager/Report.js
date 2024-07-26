import React, { useContext, useState } from 'react'
import DatabaseContext from '../context/DatabaseContext';
import ReportContext from '../context/ReportContext'
import CustomerReport from './CustomerReport'
import ProductReport from './ProductReport'

export default function Report() {

  const { ordersGrouped , ordersList, getTotalIncome, totalIncome} = useContext(ReportContext)
  const { FruitsDataList } = useContext(DatabaseContext);

  const showCustomerReport = () => {
    const myCstmReport = document.getElementById("CustomerReportDiv")
    if (myCstmReport.style.display !== "none")
      myCstmReport.style.display = "none"
    else
    myCstmReport.style.display = "block"
  }

  const showProductReport = () => {
    const myPrdctReport = document.getElementById("ProductReportDiv")
    if (myPrdctReport.style.display !== "none")
      myPrdctReport.style.display = "none"
    else
    myPrdctReport.style.display = "block"
  }

  const viewTotalIncome = () => {
    getTotalIncome()
    const myTotalIncome = document.getElementById("totalIncomeDiv")
    if (myTotalIncome.style.display !== "none")
      myTotalIncome.style.display = "none"
    else
    myTotalIncome.style.display = "block"
  }

  
  ordersGrouped.map((order) => {
    console.log(order.id)
    console.log(order)
  })
  console.log("test")
  console.log(ordersGrouped)



  return (
    <div className='task-container'>
      <h1>Report</h1>
      <button onClick={showCustomerReport}>Customers</button>
      <button onClick={showProductReport}>Products</button>
      <button onClick={viewTotalIncome}>Total Income</button>
      <h2 id={"totalIncomeDiv"} style={{display:"none"}}>Total Income: ${totalIncome.toFixed(2)}</h2>
      <div id={"CustomerReportDiv"} style={{display:"none"}}>
        <h3>Customer</h3>
        {ordersGrouped.map(customerReport => (
          <CustomerReport key={customerReport.customerName} customerReport={customerReport} />
        ))}
      </div>
      <div id={"ProductReportDiv"} style={{display:"none"}}>
        <h2>Products Bought</h2>
        {ordersList.map(product => (
          <ProductReport key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}
