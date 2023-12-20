import { useEffect, useState } from "react"






const UseEffect2=()=>{

    const[count,setCount]=useState(0)


   useEffect(()=>{
    document.title=`Cuurent Count ${count}`
   },[count])


   const handleIncrement=()=>{
    setCount(count+1)
}

    return(
        <>
        
        
        <h3>UseEffect2</h3>
        <h3>{count}</h3>
        <button onClick={handleIncrement} >Increment</button>
        </>
    )
}
export default UseEffect2