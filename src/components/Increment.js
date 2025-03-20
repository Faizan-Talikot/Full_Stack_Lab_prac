import React, { useState } from 'react'

const Increment = ({darks}) => {
    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(darks)
    

    function increment() {
        setCount(count + 1)
        console.log(count)
    }
    function decrement() {
        if(count !==0){
            setCount(count - 1)
        }
        console.log(count)
    }
    function change() {
        setDark(!dark)
        console.log(dark)
    }


  return (
    <>
    
    
    <button onClick={increment} className='btn1'>+</button>
    <p className='count'>{count}</p>    
    <button onClick={decrement} className='btn2'>-</button>
    <button onClick={() => change()}>Change Theme</button>
    
    </>
  )
}

export default Increment