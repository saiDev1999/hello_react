import { useMemo, useState } from "react"








const TextConverter =({text})=>{
    const[flag,setFlag]=useState(false)


  const textUpperCase  =useMemo(()=>{
        console.log("TextConverter")
        return text.toUpperCase()
    },[text])



 

    const handleFlag=()=>{
        console.log("flag changer")
        setFlag(!flag)
    }

    return(
        <>
        <h2>{textUpperCase}</h2>
        <button onClick={handleFlag} >Alter state {flag?"state1":"state2"}</button>

        </>
    )
}

export default TextConverter



// useMemo is a memorization technique which caches the value , it prevents recalcalution of complex values 

// useMemo

// 2 args

// 1.  callback function
// 2. array 

// return 1 value 