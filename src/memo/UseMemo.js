import React, { useState,memo,useMemo, useCallback } from 'react'


function Child({name}){
  // const memo_getName= useMemo(()=>{
  //   return ()=>{
  //     return name
  //   }
  // },[name])

  const memo_getName=useCallback(()=>{return name},[name])
  return <div>{memo_getName()}</div>
}




function UseMemo() {
  const [name,setName]= useState('Jim')
  const [name2,setName2]= useState('Nemo')
 
  return (
    <div>
      <Child name={name}/>
      <Child name={name2}/>
      <button onClick={()=>{
        setName(name==='Jim'?'Kim':'Jim')
      }}>Jim-Kim</button>
      <button onClick={()=>{
        setName2(name2==='Nemo'?'Marlin':'Nemo')
      }}>Nemo-Marlin</button>
    </div>
  )
}






export default UseMemo
