import { Route, Routes } from "react-router-dom"
import ForgotPassword from "../screens/forgotPassword"
import LoginScreen from "../screens/loginScreen"
import RegisterScreen from "../screens/registerScreen"
import React from "react"

const PreLoginRoutes=()=>{
    return(
        <Routes>
        
           <Route path="/" Component={LoginScreen}  />
            <Route path="/register" Component={RegisterScreen}  />
            <Route path="/forgot-password"  Component={ForgotPassword} />
        
            </Routes>
    )
}
export default PreLoginRoutes