import { useContext, useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Increment from './components/Increment';
import Timer from './components/Timer';
import Calculation from './components/Calculation';
import {ThemeContext, ThemeProvider} from './components/ThemeContext';
import ThemeDisplay from './components/ThemeDisplay';
import ThemeButton from './components/ThemeButton';


function App() {

  const {theme} = useContext(ThemeContext);

  useEffect(()=>{
    if(theme === 'dark'){
      document.body.style.backgroundColor = '#333';
      document.body.style.color = 'white';
    }
    else{
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  },[theme])

  return (
    <>
       <Increment />
      <Form  />
      <Timer/>
      <Calculation/>
  
    
      <div>
        <h1>Theme Switcher</h1>
        <ThemeButton/>
        <ThemeDisplay/>
      </div>
   </>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
