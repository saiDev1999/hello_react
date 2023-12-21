import { createContext, useEffect, useState } from "react";
import Navigation from "./navigation/navigation";


 
export const UserNameContext=createContext()


export const DarkContext=createContext()
function App() {
  const [name]=useState("sai")





  return (
    



    <UserNameContext.Provider  value={name} > 
   <Navigation/>
   </UserNameContext.Provider>

  );

}

export default App;




// hooks :  it is feature in functional component which let you use of state and other react features(life cycle of components)
// hooks introduced in 2018 as a version of 16.8 



// hooks :

// 1. useState 
// 2. useEffect

// 80%

// 3. useRef
// 4. useReducer 
// 5. useCallback 
// 6. useMemo 
// 7. useContext 

// 8. custom hooks(user define)

// 20%



// rules of hooks

// 1. hooks were used in functional based components
// 2. hooks must be defined in the functional body and must on top 
// 3. hooks cannot be conditional // Don’t call Hooks inside loops, conditions, or nested functions

// tasks :
// 1. Repeat the class and complete pending work 
// 2. Research about hooks
// 3. what is the state management in react 
// 4. uplifting of state examples 
// 5. table --> list of employees -> designation (3 buttons --> filter by react dev,filter by angular dev, js dev,all)

// steps (algorithm)
// 1. state creating --> array of objects 
// 2. rendering the data using map 
// 3. create a 4 buttons 
// 4. attach the methods 
// 5. Each method we need use filter method in js  , filter returns array , that array we will set the state using setState


// useState : useState will let you add state in your functional components instead of using class 


// state : 



// useState will accept state variable (data of anything which is changing over time) as a argument  --> initiaze 

// useState will return 2 elements ( current state and updater function )


// count : 0


// current state  (0)

// updater function --> to change the current state in functional component we must use updater function


// 11-dec-2023


// forms :

// input ---> types : text , radio , checkbox , password , email ..



// in react we will handle forms in  2 ways 

// 1. Uncontrolled components 

// 2. Controlled components


// Uncontrolled components  : Uncontrolled components are used in react while writing form  where data will be controlled by the dom 

// disadvantage :
// 1. field validations were not possible 





// Controlled components : controlled components are used in react while writing form where data will be controlled by the react  
// advantage : field validations were possible 



// routing : to navigate btw the pages easily and more readable way 

// react-router-dom ----> this is the library which helps react to navigate or switching btw pages 


// stack 


// pre login screens 

// 1. sign up 
// 2. sign in 
// 3. forgot password 

// post login routes 

// 1. home 
// 2. contact us 
// 3. setting 
// 4. about 


// tasks :
// 1. Repeat the class 
// 2. Fill the screens with content (login Form, register form , forgot password)
// 3.Todo (CRUD)
// 4. add button and genearate circles , when we click on circle color has to Change , if we click again revert back  



// tasks

// 1. repeat the class 
// 2. fill the screens with content 





// Use Effect :

// it is a hook in react which primarily used to cause or perform the side effects in  functional based components 

// side effects:

// 1.Http req 
// 2.Dom manipulations 
//3.to trigger  event listeners 
// 3.Timing events 
// 4.Any subscribtions

// compared to class based components useEffect is replacement of 3 methods in life cycle 

// 1. Component did mount (once in a life cycle)
// 2. Component did update (whenever state or prop updates)
// 3. component will unmount (to prevent memory leak(cleanup))

// syntax : useEffect(callbackfunction,array)
// array-> dependency array 

// useEffect(()=>{},[])






// context api : it is a build in concept in react which is used to share the state or data globally (we can avoid the prop)


// total 3 steps for context creation in functional component 



// 1. Create a context 
// 2. Wrap the context with the provider with value prop 
// 3. use the context using useContext hook 





// 5 sec 

// 1 sec ---> 11% 



// Optimization : in increase app performance with out much loading time


// users will increase 




// 1. react.memo (hoc)


// memorization tech 


// 1. use Memo --> value 


// milk ----> 50 rupee 
//  day 1 ---> 2 milk --> 100 
//  day 2 ---> 2 milk --> 100 
//  day 3 ---> 2 milk --> 100 
//  day 4 ---> 2 milk --> 100 
//  day 5 ---> 3 milk ---> 150 



// 2. useCallback ---> function 




// Custom hooks 

// to reuse the common functuality of the application we prefer to disign our hooks , which we call as custom hooks

// we utilize the existing hooks 


// example : axios reusability 






















































