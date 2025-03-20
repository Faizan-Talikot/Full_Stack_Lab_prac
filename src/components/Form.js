import React, { useState } from 'react';

const Form = ({ darks }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [dark, setDark] = useState(darks);

    // Effect to update body background color when dark mode changes
    

    return (
        <div style={{
            textAlign: "center", 
            padding: "20px", 
            background: dark ? "#333" : "#f5f5f5", 
            borderRadius: "10px",
            maxWidth: "300px",
            margin: "auto",
            boxShadow: dark ? "0 0 10px white" : "0 0 10px gray"
        }}>
            <h2>User Profile</h2>
            <input 
                type="text" 
                placeholder="Enter your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                style={{ padding: "8px", marginBottom: "10px", width: "90%" }}
            />
            <br />
            <input 
                type="text" 
                placeholder="Enter your Age" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
                style={{ padding: "8px", marginBottom: "10px", width: "90%" }}
            />
            <br />
            <div><b>Name:</b> {name}</div>
            <div><b>Age:</b> {age}</div>
        </div>
    );
}

export default Form;
