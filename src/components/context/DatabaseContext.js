import { addDoc, collection } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from '../../firebase'
import FruitsData from "../fruits/FruitsData";


const DBProductsContext = createContext()

export const ProductContextProvider = ({children}) => {

  const [FruitsDataList, setFruitsDataList] = useState(FruitsData)

  const addToDatabase = async (product) => {
    console.log("Trying to add to database")
    console.log(product)
    console.log(product.category)
    try{
      const docRef = await addDoc(collection(db, "Products"), {
        name: product.name,
        category: product.category,
        imageURL: product.imageURL,
        price: product.price,
        quantity: product.quantity,
        unit: product.unit
      })
      console.log("added " + product.name + " to database")
      setFruitsDataList(
        FruitsDataList.filter((fruit)=> fruit.id !== product.id)
      )
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }


  return (
    <DBProductsContext.Provider value={{addToDatabase, FruitsDataList}}>
      {children}
    </DBProductsContext.Provider>
  )
}
export default DBProductsContext;
