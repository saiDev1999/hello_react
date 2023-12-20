import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "../screens/loginScreen"
import RegisterScreen from "../screens/registerScreen"
import ForgotPassword from "../screens/forgotPassword"
import InvalidScreen from "../screens/invalidScreen"
import HomeScreen from "../screens/postLoginRoutes /home-screen"
import AboutScreen from "../screens/postLoginRoutes /about-screen"
import SettingScreen from "../screens/postLoginRoutes /setting-screen"
import ProductDetail from "../screens/postLoginRoutes /product-detail"
import PostLoginRoutes from "./postLoginNavigation"
import PreLoginRoutes from "./preLoginNavigation"
import { createContext, useState } from "react"





export const LoginDetails=createContext()

const Navigation = () => {
    const [login, setLogin] = useState(true)
    const signIn = () => {
        debugger
        setLogin(true)
    }
    const signOut = () => {
        setLogin(false)
    }
    return (
        <LoginDetails.Provider  value={{login,signIn,signOut}} >
        <BrowserRouter>

            {

true ?
                    <PostLoginRoutes />
                    :
                    <PreLoginRoutes />

            }
        </BrowserRouter>
        </LoginDetails.Provider>
    )
}
export default Navigation


// 1. browser router should be imported from react router dom
// 2. list the routes in the app (3)
// 3. each route provide the path and component 




// routing has to split 
// pre login routes 
// 1. register 
// 2. login

// login --> entered the details ---> if status code is 200 --> will change the login  flag 

// post login routes 
// 1. home
// 2. about 
// 3. setting 





// prop drilling 



// global state management :

// to manage the component state or data globally across every component 

// 1. context api (pre build react concept )
// 2. redux (third party library for managing the state globally )

// token :

// register api :  forward details to server 

// login api : details(request) will be sent to server , response from server (200 status )

// response --->  token 

// we will pass this token to all internal apis 









