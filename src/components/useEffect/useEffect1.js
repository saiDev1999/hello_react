import axios from "axios"
import { useEffect, useState } from "react"

const UseEffect =()=>{
    const[data,setData]=useState([])
    const [count,seCount]=useState(0)
    const [count1,seCount1]=useState(10)

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>console.log(response.data))
        .catch(res=>console.error(res))


    },[count,count1])

    const handleIncrement=()=>{
        seCount(count+1)
    }
    const handleIncrement1=()=>{
        seCount1(count1+1)
    }

    return(
        <>
        
        <h2>UseEffect</h2>
        <h2>current count {count}</h2>
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleIncrement1} >Increment2ndCount</button>
        </>
    )
}

export default UseEffect

// []  --> component did mount
// [variableState,variableState1,variableState2], ---> component did update
