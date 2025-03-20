import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Increment from './components/Increment';

function App() {
  const [dark, setDark] = useState(false); // Added setDark to allow state change

  // Effect to update body styles when dark mode changes
  useEffect(() => {
    document.body.style.backgroundColor = dark ? 'black' : 'white';
    document.body.style.color = dark ? 'white' : 'black';
  }, [dark]);

  return (
    <div className="App" style={{ background: dark ? 'black' : 'white', minHeight: "100vh", padding: "20px" }}>
      <button 
        onClick={() => setDark(prevDark => !prevDark)} 
        style={{
          padding: "10px",
          marginBottom: "20px",
          background: dark ? "#444" : "#ddd",
          color: dark ? "white" : "black",
          border: "none",
          cursor: "pointer"
        }}
      >
        Toggle Theme
      </button>
      <Increment darks={dark} />
      <Form darks={dark} />
    </div>
  );
}

export default App;
