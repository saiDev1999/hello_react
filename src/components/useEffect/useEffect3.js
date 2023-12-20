import { useEffect, useState } from "react"


const UseEffect3 = () =>{

    const[xPosition,setXPosition]=useState(0)
    const[yPosition,setYPosition]=useState(0)
    
    useEffect(()=>{

   document.addEventListener("mousemove",onMouseMove)
   return ()=>{

    document.removeEventListener("mousemove",onMouseMove)
   }

    },[])

    const onMouseMove =(event)=>{
        console.log("mouse moving",event.clientX)
        setXPosition(event.clientX)
        setYPosition(event.clientY)
    }



    return(
        <>
        <h4>UseEffect3</h4>
        <p>X-AXIS POSITION {xPosition}</p>
        <p>Y-AXIS POSITION {yPosition}</p>
        </>
    )
}

export default UseEffect3