import { db } from '../../firebase'
import { addDoc, deleteDoc, doc, where, collection, getDocs, getDoc, orderBy, query, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

const DBReportContext = createContext()

export const ReportContextProvider = ({children}) => {

  const [reportList, setReportList] = useState([])
  let ordersGrouped = []
  let firstName = ""
  const [totalIncome, setTotalIncome] = useState(0)
  const [customerReport, setCustomerReport] = useState([])

  useEffect(() => {
    const fetchTask = async () => {
      try{
        const reportListRef = collection(db, "ProcessedOrders");
        const q = query(reportListRef, orderBy("customerName", "desc"), orderBy("total", "desc"), limit(100));

        const querySnapShot = await getDocs(q)
        const rprtList = querySnapShot.docs.map((doc) => {
            const dataWithId = doc.data();
            dataWithId.id = doc.id; // Merge the document ID into the data object
            const shoppingCart = doc.data().shoppingCart
            const lastEle = shoppingCart.length;
            delete dataWithId.shoppingCart;
            dataWithId.cstmCcart = shoppingCart.slice(0, lastEle);
            console.log("shoppingCart")
            console.log(dataWithId.cstmCcart)
            return dataWithId;
            // console.log(doc.data().shoppingCart)
            // return {...(doc.data()), id: doc.id}
          })
          console.log('rprtList')
          console.log(rprtList)
          setReportList([...rprtList])
      }
      catch(err){
        console.error(err)
      }
    }
    fetchTask();
    }, [])

    ordersGrouped = []
    firstName = ""


    reportList.map((report) => {
      if (firstName != report.name){
        ordersGrouped.push({
          customerName: report.customerName,
          cart: report.cstmCcart,
          total: report.total
        })
        firstName = report.name
      }
      else {
        ordersGrouped[ordersGrouped.length - 1].cart.push(...report.cstmCcart)
        ordersGrouped[ordersGrouped.length - 1].total += report.total
      }
    })

  
    ordersGrouped.map((customer) => {
      const quantityTracker = {};
  
      // Step 1: Track quantities
      customer.cart.forEach(item => {
        const { id, name, quantity } = item;
        if (quantityTracker[name]) {
          quantityTracker[name].quantity += quantity;
        } else {
          quantityTracker[name] = { id, quantity };
        }
      });
  
      // Step 2: Convert quantityTracker object back to an array
      const combinedCart = Object.keys(quantityTracker).map(name => ({
        id: quantityTracker[name].id,
        name: name,
        quantity: quantityTracker[name].quantity
      }));
  
      // Output the combined cart
      customer.cart = combinedCart

    })
    const orders = ordersGrouped.map((order) => {
      return order.cart
   })


  const mixedordersList = [].concat(...orders);

  const ordersObj = {}
  mixedordersList.map((item)=>{
    if (!ordersObj[item.name]) {
      ordersObj[(item.name)] = {
        name: item.name,
        id: item.id,
        quantity: item.quantity
      }
    }
    else {
      ordersObj[(item.name)].quantity += item.quantity
    }
  })

  const ordersList = Object.values(ordersObj)

  const getTotalIncome = async () => {
    let final = 0

    for (let i = 0; i < ordersGrouped.length; i++) {
      final = final + ordersGrouped[i].total;
    }
    setTotalIncome(final)
  }

  const printCustomerReport = async (cstmName) => {
    console.log("trying to print customer report")
    try{
      const queryRef = query(collection(db, "ProcessedOrders"), where("customerName", "==", cstmName), orderBy("year", "desc"), orderBy("month", "desc"),orderBy("date", "desc"));
      const querySnapshot = await getDocs(queryRef);

      if (!querySnapshot.empty) {
        const reportList = []

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const dataWithId = doc.data();
          dataWithId.id = doc.id;
          reportList.push(dataWithId)
        });

        setCustomerReport([...reportList])
      }
      else{
        console.log("empty")
      }
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }

  return (
    <DBReportContext.Provider value={{ ordersGrouped, reportList, ordersList, getTotalIncome, totalIncome, printCustomerReport, customerReport }}>
      {children}
    </DBReportContext.Provider>
  )
}

export default DBReportContext;