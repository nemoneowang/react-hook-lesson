import React,{useState,useCallback} from 'react'
const testSet = new Set()
const testSetNo = new Set()
function UseCallback() {

  // https://segmentfault.com/a/1190000020108840
  const [count, setCount] = useState(1)
  const [name, setName] = useState('Jim')
  const computed=useCallback(()=>{
    if(count%2===0){
        return 'Jim'+' '+count
    }else{
        return 'Jim'+' '+ new Date().getTime()
    }
  },[count]);
  const computed2=()=>{
    if(count%2===0){
        return 'Jim'+' '+count
    }else{
        return 'Jim'+' '+ new Date().getTime()
    }
  }
  testSet.add(computed)
  testSetNo.add(computed2)
  return (
    <div>
      {/* {count}
      <br />
      {name}
      <br />
      {computed()} */}
      {
        testSet.size
      }
      <br />
      {
        testSetNo.size
      }
      <br/>
      <button onClick={()=>{
        setName('Jim'+new Date().getTime())
      }}>name+time</button>
      <button onClick={()=>{
        setCount(count+1)
      }}>count++</button>
    </div>
  )
}

export default UseCallback
