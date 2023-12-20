

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const product =useParams()
    const [item,setItem]=useState({})

    useEffect(()=>{
      handleLoadProduct()

    },[])


    const handleLoadProduct=()=>{
        axios.get(`https://fakestoreapi.com/products/${product.id}`)
        .then(response=>setItem(response.data))
    }
  return (
    <div>
        {/* <button onClick={handleLoadProduct} >Click to see product</button> */}
        {
            Object.keys(item).length>0  ?
            <>
    
            
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.title} width={200} height={200} />
            </>
            
            :null
        }

        
    </div>
  )
}

export default ProductDetail