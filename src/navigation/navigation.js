import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "../screens/loginScreen"
import RegisterScreen from "../screens/registerScreen"
import ForgotPassword from "../screens/forgotPassword"
import InvalidScreen from "../screens/invalidScreen"





const Navigation = () =>{
    return(
        <BrowserRouter>
        <Routes>

            {/* static routing  */}
            <Route path="/" Component={LoginScreen}  />
            <Route path="/register" Component={RegisterScreen}  />
            <Route path="/forgot-password"  Component={ForgotPassword} />
            <Route path="*"  Component={InvalidScreen} />

            {/* dynamic routing  */}
            {/* id routing for products or items  */}


        </Routes>
        
        
        
        </BrowserRouter>
    )
}
export default Navigation


// 1. browser router should be imported from react router dom
// 2. list the routes in the app (3)
// 3. each route provide the path and component 