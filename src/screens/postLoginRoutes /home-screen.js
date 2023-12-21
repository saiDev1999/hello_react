import React, { useEffect, useState } from 'react'
import Header from '../../components/navbar /header'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import useAxios from '../../components/customHooks/useAxios'
import { PRODUCT_LISTING } from '../../components/customHooks/endPoints'

function HomeScreen() {

         const [data,error] =useAxios(PRODUCT_LISTING)

         console.log(data)

    const navigate =useNavigate()
  
    const handleSignOut = ()=>{
        navigate("/login")

    }
  return (
    <div>
        <Header/>
        {
            data.length>0 ? data.map(element=>{
                return (
                    <>
                    <h3>{element.title}</h3>
                    <button>
                        <Link to={`/product/${element.category}/${element.id}`} >
                        Click to see product details
                        </Link>
                        
                
                        
                        </button>
                    </>
                )
            })
            :
            <h2>no products</h2>
        }

<button onClick={handleSignOut} >SignOut</button>
    </div>
  )
}

export default HomeScreen