import { db } from '../../firebase'
import { addDoc, updateDoc, increment,  deleteDoc, doc, collection, getDocs, getDoc, orderBy, query, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

const DBOrderContext = createContext()

export const OrderContextProvider = ({children}) => {

   const [orderList, setOrderList] = useState([])

  useEffect(() => {
    const fetchOrders = async () =>{
      try{
        console.log("fetching orders")
        const orderListRef = collection(db, "Orders");
        const q = query(orderListRef, orderBy("email"), limit(500));
        const querySnapShot = await getDocs(q)
        const ordrList = querySnapShot.docs.map((doc) => {
            const dataWithId = doc.data();
            dataWithId.id = doc.id; // Merge the document ID into the data object
            return dataWithId;
          })
        setOrderList(ordrList)
      }
      catch(err){
        console.error(err)
      }
    }
    fetchOrders();
  }, [0])


  const processOrder = async (order) => {
    console.log(order)
    try{

      await deleteDoc(doc(db, "Orders", order.id))

      delete order.id;
      order.customerName = order.name
      delete order.name;

      const docRef = await addDoc(collection(db, "ProcessedOrders"), {
        ...order
      })

      order.shoppingCart.map((item) => (
        updateDoc(doc(db, 'Products', item.id), {
          quantity: increment(-1 * item.quantity)
        }
      )))

      console.log("added order to history database")
    }
      catch(err){
      console.error(err)
    }
  }


  return (
    <DBOrderContext.Provider value={{ orderList, processOrder }}>
      {children}
    </DBOrderContext.Provider>
  )
}

export default DBOrderContext;