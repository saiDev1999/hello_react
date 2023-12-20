import React from 'react'
import Header from '../../components/navbar /header'
import UseReducer from '../../components/forms /useReducer/useReducer'
import UseMemo from '../../components/useMemo /useMemo'
import UseCallback from '../../components/useCallback/useCallbackParent'

function SettingScreen() {
  return (
    <div>
            <Header/>
            <h3>i am setting screen</h3>
     <UseCallback/>
    </div>
  )
}

export default SettingScreen