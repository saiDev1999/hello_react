import { useState } from "react"
import TextConverter from "./text-converter"




const UseMemo =()=>{
    const[greet,setGreet]=useState("Good Morning")

    return(

        <>
        <h2>parent</h2>
        <TextConverter  text={greet} />
        </>
    )
}

export default UseMemo