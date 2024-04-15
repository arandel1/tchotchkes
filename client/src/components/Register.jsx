// TO-DO:

// import any queries from slices we create, if needed
// Review specific inputs (lines 27-33 and lines 39-44) once we are aligned on those values / keys
// This can all be changed later on, but starting with just requesting a username/email and password

// -----------------------------
// -----------------------------
import React from "react";
import { useState } from "react";

const baseUrl = 'http://localhost:8080/tchotchke/users'

function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if(response.ok){
        const newUser = await response.json();
        localStorage.setItem("auth", JSON.stringify(newUser))
        setSuccessMessage('Account created successfully!');
        setFormData({ name: '', email: '', password: '' })
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Registration failed.')
      }
     }
    catch (error){
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className="container">
        <h3> Sign Up </h3>
        <form onSubmit={ handleSubmit }>
          <label className="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={ handleChange }
            />

          <br/>
          <label className="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={ handleChange }
            />
          <br />

          <label className="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={ handleChange }  
            />
          <br />

          <button type="submit">Sign Up</button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </>
  );
}

export default Register;
