import React from 'react'

export default function OrderPrint({ report, setPrintList, setOrderTotal, setCstmName, setOrderID, setDateArray, setEmail }) {

  const showPrint = () => {
    const myDiv = document.getElementById("printDiv")
    myDiv.style.display = "block"
    setPrintList([...report.shoppingCart])
    setOrderTotal(report.total)
    setCstmName(report.customerName)
    setEmail(report.email)
    setOrderID(report.id)
    setDateArray([report.month, report.date, report.year,])
  }

  console.log("report test")
  console.log(report)

  return (
      <tr onClick={showPrint}>
        <td colSpan="2">
          {report.id} 
        </td>
        <td colSpan="2">
           {report.date}/{report.month}/{report.year - 2000}
        </td>
        <td colSpan="2">
           ${report.total.toFixed(2)}
        </td>
      </tr>
  )
}
