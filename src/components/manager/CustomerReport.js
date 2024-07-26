import React, {useContext} from 'react'
import { FaEye } from "react-icons/fa";
import ReportContext from '../context/ReportContext'
import { useNavigate } from 'react-router-dom';



export default function CustomerReport({ customerReport }) {

  const { printCustomerReport } = useContext(ReportContext)
  const navigate = useNavigate()


  const showDetails = () => {
    const myDetails = document.getElementById("customer" + customerReport.customerName)
    if (myDetails.style.display !== "none")
      myDetails.style.display = "none"
    else
    myDetails.style.display = "block"
  }

  const printReport = () => {
    printCustomerReport(customerReport.customerName)
    console.log(customerReport.customerName)
    navigate("/print")
  }
  return (
    <div className='task-item'>
      <h3>{customerReport.customerName}</h3>
      <div id={"customer" + customerReport.customerName} style={{display:"none"}}>
      <p>Items Bought:</p>
      {customerReport.cart.map((cartItem) => (
        <p>{cartItem.name} x {cartItem.quantity}</p>
      ))}
      </div>
      <p>Total: ${customerReport.total.toFixed(2)}</p>
      <FaEye onClick={showDetails}/>
      <button onClick={printReport} style={{float: "right"}}>Print</button>
    </div>
  )
}
