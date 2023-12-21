import { useState } from "react"




const useCounter =(initialValue=1,scale=1)=>{
   const[count,setCount]=useState(initialValue)
   const increaseCount=()=>{
    setCount(count+scale)
   }
   const decreaseCount=()=>{
    setCount(count-scale)
   }
   const resetCount=()=>{
    setCount(0)
   }

   return [count,decreaseCount,increaseCount,resetCount]
}

export default useCounter










