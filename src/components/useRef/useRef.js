import { useRef } from "react";



// useRef :
// to access the dom directly we can use useRef
// component will doesn't re-render when we use useRef



// button to highlight the input 
// page load to highlight


const UseRef =()=>{

    const inputRef=useRef()
    const handleClick=()=>{

        inputRef.current.focus()


    }


    return(
        <>
        <input ref={inputRef}   />
        <button onClick={handleClick} >Click to highlight</button>
        </>
    )
}

export default UseRef



// tasks:
// 1. Repeat the class 
// 2. Fill the screens with content (login,register,home,contact,footer,setting)
// 3. use local storage for register and login 
// 4. folow the blog create a fake json in local 





