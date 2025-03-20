import React, { useEffect, useState } from 'react'

const Calculation = () => {
    const [count,setCount] = useState(0);
    const [cal, setCal] = useState(0);

    useEffect(()=>{
        setCal(()=>count * 2);
    },[count])
  return (
    <>
    <div>Count: {count}</div>
    <button onClick={()=>setCount(count+1)}>+</button>
    <div>Calculation: {cal}</div>
    </>
  )
}

export default Calculation