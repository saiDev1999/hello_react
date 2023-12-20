import React, { useEffect, useState } from 'react'
import Header from '../../components/navbar /header'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function HomeScreen() {

    // https://fakestoreapi.com/products
    const navigate =useNavigate()
    const[data,setData]=useState([])
  useEffect(()=>{
    loadProducts()

  },[])

    const loadProducts =()=>{

        axios.get("https://fakestoreapi.com/products")
        .then(response=>setData(response.data))
        .catch(res=>console.error(res))
    }
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