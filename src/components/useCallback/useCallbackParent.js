







import React, { useCallback, useState } from 'react'
import Greet from './greet'
import Heading from './heading'
import Button from './button'

function UseCallback() {
    const [salary,setSalary]=useState(10000)
    const [age,setAge]=useState(10)

  const handleSalary=  useCallback(()=>{
        console.log("handleSalary")
        
         setSalary(salary+1000)
     },[salary])


     const handleAge= useCallback(()=>{
        console.log("handleAge")
        
        setAge(age+1)
    },[age])
   

  return (


    <div>
    <Greet/>
    <Heading text={salary}   />
    <Button   onClick={handleSalary}  >Increment salary</Button>
    <h2>----------------------------------</h2>
    <Heading text={age}   />
    <Button onClick={handleAge} >Increment age</Button>

         
    </div>
  )
}

export default UseCallback

// useCallback


// 1. callback function 
// 2. array 


// tasks 
// 1. repeat the class
// 2. 5 ex of useCallback, and usememo
// 3. pending task completion 