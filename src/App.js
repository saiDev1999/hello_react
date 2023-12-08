import logo from './logo.svg';
import './App.css';

function App() {
// we can use hook here



// if(true){
//   useState
// }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          login added
        </a>
      </header>
    </div>
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
