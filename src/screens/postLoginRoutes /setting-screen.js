import React from 'react'
import Header from '../../components/navbar /header'
import UseReducer from '../../components/forms /useReducer/useReducer'
import UseMemo from '../../components/useMemo /useMemo'
import UseCallback from '../../components/useCallback/useCallbackParent'
import useCounter from '../../components/customHooks/useCounter'

function SettingScreen() {
     const[count,decreaseCount,increaseCount,resetCount]=useCounter(100,10)
  return (
    <div>
            <Header/>
            <h3>i am setting screen</h3>
            <h1>Parent {count}</h1>
            <button onClick={increaseCount} >Increase Count</button>
            <button onClick={decreaseCount} >Decrease Count</button>
            <CounterEx/>

    </div>
  )
}

export default SettingScreen


const CounterEx=()=>{
  const[count,decreaseCount,increaseCount,resetCount]=useCounter(10,1)

  return (
    <div>


            <h1>Child {count}</h1>
            <button onClick={increaseCount} >Increase Count</button>
            <button onClick={decreaseCount} >Decrease Count</button>

    </div>
  )



}