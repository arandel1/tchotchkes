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
      <div className="register-form-container"> 
        <h3 class="text-center text-uppercase">Sign Up</h3>  
        <form className="form mx-auto" onSubmit={handleSubmit}> 
          <div className="mb-3"> 
            <label for="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3"> 
            <label for="email" className="form-label">Email:</label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
          </div>

          <div className="mb-3"> 
            <label for="password" className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-dark">Sign Up</button> 
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </>
  );
}

export default Register;