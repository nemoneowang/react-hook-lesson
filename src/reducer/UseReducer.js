import React from 'react'
import Child from './Child'
import Child2 from './Child2'
import { TestReducer } from './reducer'

function UseReducer() {
  return (
    <div>
      <TestReducer>
        <Child />
        <Child2 />
      </TestReducer>
    </div>
  )
}

export default UseReducer
