import React,{useState,useEffect} from 'react'
let timer= null
export default function UseEffect() {
  const [count, setCount] = useState(1)
  useEffect(()=>{
    //mounted
    console.log('mounted') // mounted = 初始化执行
  },[])
  useEffect(()=>{return ()=>{
    // unmounted
    console.log('unmounted') // unmounted =函数销毁后执行    80
  }},[])

  useEffect(()=>{
    // 先执行
    // 限执行effect主题=>setState=>执行毁掉函数
    console.log('set')
    document.title=count
    // timer = setInterval(()=>{
    //   setCount(count=>count+1)
    // },10*1000)
    return ()=>{
      // 后执行 
      console.log('clear')
      // clearInterval(timer)
    }
  },[count])




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
