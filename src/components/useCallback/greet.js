

import React from "react"


const Greet =()=>{
    console.log("greeting")

    return(
        <>
        
        <h1>Good Morning</h1>
        </>
    )
}


export default React.memo(Greet)