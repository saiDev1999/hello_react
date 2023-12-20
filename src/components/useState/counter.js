import { useState } from "react"



const Counter = () => {
  const [count,setCount] = useState(10)
  const [isVisible,setIsVisible] =useState(false)

  const handleIncrement = () =>{
    
    setCount(count+1)

  }
  const handleChildVisible =()=>{
    setIsVisible(true)
  }

    return(
        <> 
        <h2>counter value {count}</h2>
        <button onClick={handleIncrement} >increment</button>

     

        {
            isVisible 
            ?
            <h2>Child is visible</h2>
            :
            <button onClick={handleChildVisible} >Click to see the child</button>
        }




        </>
    )
} 

export default Counter




