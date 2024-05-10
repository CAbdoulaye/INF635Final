import { Navigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext"

const ProtectedRoute = ({children}) =>{
  const {user} = UserAuth();
  console.log(user)
  if(!user){
    return <Navigate to="/signIn"/>
  }
  console.log("Protected")
  return children;
}

export default ProtectedRoute;