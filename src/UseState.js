import React,{useState} from 'react'

export default function UseState() {
  const [count, setCount] = useState(1)



  return (
    <div>
      <span>{count}</span>
      <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>-</button>     
    </div>
  )
}
