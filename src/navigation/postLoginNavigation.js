import { Route, Routes } from "react-router-dom"
import InvalidScreen from "../screens/invalidScreen"
import AboutScreen from "../screens/postLoginRoutes /about-screen"
import HomeScreen from "../screens/postLoginRoutes /home-screen"
import ProductDetail from "../screens/postLoginRoutes /product-detail"
import SettingScreen from "../screens/postLoginRoutes /setting-screen"
import React from "react"




const PostLoginRoutes =()=>{


    return(
        <Routes>
             <Route path="/"  Component={HomeScreen} />
        
             <Route path="/about"  Component={AboutScreen} />
            <Route path="/setting"  Component={SettingScreen} />
        <Route path="*"  Component={InvalidScreen} />
        <Route path="/product/:id/:id"  Component={ProductDetail} />
        </Routes>


    )
}
export default PostLoginRoutes