import React, {useContext, useState} from 'react'
import ReportContext from '../context/ReportContext'
import OrderPrint from './OrderPrint'

export default function Print() {

  const { customerReport } = useContext(ReportContext)
  const [printList, setPrintList] = useState([])
  const [orderTotal, setOrderTotal] = useState(0)
  const [cstmName, setCstmName] = useState("")
  const [email, setEmail] = useState("")
  const [orderID, setOrderID] = useState("")
  const [dateArray, setDateArray] = useState([])


  const hidePrint = () => {
    const myDiv = document.getElementById("printDiv")
    myDiv.style.display = "none"
  }

  const printPage = () => {
    alert("Printing Report")
  }

  return (
    <div className='task-container'>
      <h1>Print</h1>
      <div className='task-item' style={{display:"none"}} id="printDiv">
        <table>
          <caption>{cstmName}</caption>
          <caption>{email}</caption>
          <caption>Order ID: {orderID}</caption>
          <caption>{dateArray[0]}/{dateArray[1]}/{dateArray[2]}</caption>
          <tr>
            <th colSpan="2">Item</th>
            <th colSpan="2">Price</th>
            <th colSpan="2">Quantity</th>
            <th colSpan="2">Total</th>
          </tr>
          {printList.map(report => (
            <tr>
              <td colSpan="2">{report.name}</td>
              <td colSpan="2">${report.price}</td>
              <td colSpan="2">{report.quantity}</td>
              <td colSpan="2">${(report.quantity * report.price).toFixed(2)}</td>
          </tr>
          ))}
          <tr>
            <th colSpan="2">Total</th>
            <th colSpan="2"></th>
            <th colSpan="2"></th>
            <th colSpan="2">${orderTotal.toFixed(2)}</th>
          </tr>

        </table>
        <button onClick={hidePrint}>Hide</button>
        <button onClick={printPage} style={{float: "right"}}>Print</button>
      </div>
      <h3>Click on order to view details</h3>
      <table>
        <tr>
          <th colSpan="2">Order ID</th>
          <th colSpan="2">Date</th>
          <th colSpan="2">Total</th>
        </tr>
        {customerReport.map((report) => {
          return (
          <OrderPrint 
            key={report.id} 
            report={report} 
            setPrintList={setPrintList} 
            setOrderTotal={setOrderTotal} 
            setCstmName={setCstmName} 
            setOrderID={setOrderID}
            setDateArray={setDateArray}
            setEmail={setEmail}
          />
          )
        })}
      </table>
    </div>
  )
}
