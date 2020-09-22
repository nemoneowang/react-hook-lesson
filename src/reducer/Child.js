import React, { useContext } from 'react'
import { TestContext } from './reducer'

function Child() {
  const {state,dispatch} = useContext(TestContext)
  return (
    <div>
      {state.name}--{state.age}
      <button onClick={()=>{
        dispatch({
        type:'addAge'
        })
      }}>birthday</button>
      <input defaultValue={state.name} onChange={(e)=>{
        dispatch({
          type:'changeName',
          payload:{
            name: e.target.value
          }
        })
      }}/>
    </div>
  )
}

export default Child
