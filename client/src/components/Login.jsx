import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const baseUrl = 'http://localhost:8080/tchotchke/users'

function Login( {auth} ) {
  const [formData, setFormData] = useState({
    email:'', 
    password:''
  });

  // const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async(e)=> {
    e.preventDefault();
    // await login(formData)
     try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },    
        body: JSON.stringify(formData)
      });

      if(response.ok){
        const user = await response.json();
        setSuccessMessage("You're logged in!");
        setFormData({ email: formData.email, password:'' })
        // navigate('/products');
        // console.log(formData)
        // console.log(response)
        // console.log(user)
        const token = user.token;
        // console.log(token)
        auth(user)

      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed. Please try again.')
      }
    }
    catch (error){
      console.error('Error:', error); 
      setErrorMessage('Login failed. Check your username or password.');
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