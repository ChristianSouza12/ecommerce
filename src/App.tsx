
import  {FunctionComponent, useContext} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"

// Pages

import HomePage from "./pages/home/home.page"
import LoginPage from "./pages/login"
import SignUpPage from "./pages/sign-up/sign-up.page"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "./config/firebase.config"
import { UserContext } from "./contexts/user.context"
import { collection, getDocs, query, where } from "firebase/firestore"





const App: FunctionComponent = () =>{
    const {isAuthenticated, loginUser, logoutUser} = useContext(UserContext)
    onAuthStateChanged(auth, async (user) => {
      const isSignOut  = isAuthenticated && !user

      if(isSignOut){
        return logoutUser()

      }

      const isSignIn = !isAuthenticated && user

      if(isSignIn){
        const querySnapshot = await getDocs(
          query(collection(db, "users"),
          where("id", "==" , user.uid)));


          const userFromFirestore = querySnapshot.docs[0]?.data()

        return loginUser(userFromFirestore as any)
      }

     
     

    })

    console.log(isAuthenticated);
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path ="/login" element={<LoginPage/>}/>
      <Route path ="/sign-up" element={<SignUpPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App