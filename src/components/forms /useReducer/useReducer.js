import { useReducer } from "react"



const initialState={
    count:0,
    name:"sai",
    subjects:["social","science"],
}
const reducerFunction =(state,action)=>{

    switch(action.type){

        case "INCREMENT":
            return {...state,count:state.count+action.payload}

        case "DECREMENT":
            return {...state,count:state.count-1}
        
        case "DECREMENT_FIVE":
            return {...state,count:state.count-5}

        case "INCREMENT_FIVE":
            return {...state,count:state.count+5}

        default :
            return state
    


    }



}



 const UseReducer =()=>{
    const[currentState,dispatch]=useReducer(reducerFunction,initialState)
    console.log(currentState)

    const handleIncrement=()=>{

        dispatch({
            type:"INCREMENT",
            payload:1
        })

    }


    return(
        <>
        <h3>User reducer</h3>
        <h2>{currentState.count}</h2>
        <button onClick={handleIncrement} >Click to increment by 1</button>

        </>
    )
 }

 export default UseReducer







// useReducer : it is a hook in react functional components which is used to manage the component state when there is complex tasks on the state 


// useReducer will accept 2 args 

// 1. initial state 
// 2. reducer function (state manipulation based on the action performed)


// returns 2 elements 
// 1. current state 
// 2. dispatch action (to change the current state)



// tasks 

// 1. Repeat the class 
// 2. Implement sign in and sign out using context api 
// 3. Implement dark mode in  the App
// 4. Implement todo using useReducer 



