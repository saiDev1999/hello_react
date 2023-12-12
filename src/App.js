import Navigation from "./navigation/navigation";


function App() {

  return (
   <Navigation/>
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





















