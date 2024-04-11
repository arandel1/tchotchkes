  // GET USERS
  // const login = async(credentials) => {
  //   const response = await fetch(`${baseUrl}/users`,{
  //     method: 'POST',
  //   });
  //   const json = await response.json();
  //   console.log(json);
  // }

import React from 'react';
import { useState } from 'react';

const baseUrl = 'http://localhost:8080/tchotchke/users'

function Login() {
  const [formData, setFormData] = useState({
    email:'', 
    password:''
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async(e)=> {
    e.preventDefault();
  
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if(response.ok){
        const user = await response.json();
        setSuccessMessage('Logged in!');
        setFormData({ email: formData.email, password:'' })
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed. Please try again.')
      }
    }
    catch (error){
      console.error('Error:', error); 
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className = 'container'>
      <h3>Login</h3>
      <form onSubmit = { handleSubmit }>
        <label
        className='email'>Email:</label>
          <input 
            type='email'
            name='email'
            placeholder = 'Email'
            value = { formData.email }
            onChange = { handleChange }
          />
        <br />

        <label className="password">Password:</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={ handleChange }  
            />
          <br />

        <button type='submit'>Login</button>

        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        {successMessage && <p className='success-message'>{successMessage}</p>}
      </form>
    </div>
  );
};

export default Login;