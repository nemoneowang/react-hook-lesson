import React,{useState,useMemo} from 'react'

function UseMemo() {
  const [count, setCount] = useState(10)
  const [name,setName] = useState('Jim')
  const memoComputed=useMemo(()=>{
    let result=1
    for(let i=count;i>0;i--){
      result = i*result
    }
    //  用useMomo包裹以后 更新name 这个函数不会执行


    //StrictMode 在 development mode 下一些 hooks 的回调会调用两次以确保没有副作用。
    // https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
    console.log(result)
    return result
   },[count])
  function computed(){
    let result=1
    for(let i=count;i>0;i--){
      result = i*result
    }
    // 如果这样不用useMemo包裹,没吃更新name 这个函数都会执行
    console.log(result)
    return result
  }
  return (
    <div>
      {count}
      <br/>
       {memoComputed}
       <br />
      {computed}
      <br />
      {name}
      <button onClick={()=>{
        setName('Jim'+new Date().getTime())
      }}>name+time</button>
      <button onClick={()=>{
        if(count>12){
          setCount(10)
          return
        }
        setCount(count+1)
      }}>count++</button>
    </div>
  )
}

export default UseMemo
