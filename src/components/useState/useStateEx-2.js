import { useState } from "react"




const UseStateExample = () =>{


    const [currentFruit,setCurrentFruit]=useState([])

    const handleClick=()=>{
        //http req 
        // set the data to current state
    }



    return(
        <>
        <h2>UseState example</h2>

       {
         currentFruit.length>0 ? currentFruit.map(fruit=><FruitDetail  fruit={fruit} />) : null

       }
        
        </>
    )
}

export default UseStateExample

const FruitDetail =({fruit})=>{
    return(
        <>
   
        <h2>------Fruit details------</h2>
        <h5>FRUIT NAME  ---{fruit.name}</h5>
        <h5>FRUIT SEASON  ----{fruit.season}</h5>
        <h5> FRUIT QTY  -----{fruit.qty}</h5>
        </>

    )
}


// tasks 

// 1. repeat the class
// 2. 