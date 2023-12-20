import React from "react"





const Button =(props)=>{

    console.log("ButtonComponent",props.children)

    return(
        <>
        
        <button onClick={props.onClick} >{props.children}</button>
        </>
    )
}

export default React.memo(Button)