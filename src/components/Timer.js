import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer((prevSeconds) => prevSeconds + 1);
        },1000);

        return () =>{
            clearInterval(interval);
        }
    },[]);
  return (
    <div>Seconds: {timer}</div>
  )
}

export default Timer