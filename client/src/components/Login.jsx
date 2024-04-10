import { useState } from 'react';

  // GET USERS
  // const login = async(credentials) => {
  //   const response = await fetch(`${baseUrl}/users`,{
  //     method: 'POST',
  //   });
  //   const json = await response.json();
  //   console.log(json);
  // }


const Login = ({ login })=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async(e)=> {
    e.preventDefault();
    const credentials = {
      username,
      password
    };
    await login(credentials);

  }

  return (
    <div className = 'container'>
      <h3>Login</h3>
      <form onSubmit = { submit }>
        <label className = 'username'>
          Username or Email: 
          <input 
            placeholder = 'Username'
            value = { username }
            onChange = { (e) => setUsername( e.target.value )}
            
          />
        </label>
        <br/>
        <label className='password'>
          Password:
          <input
            type = 'password'
            placeholder='Password'
            value={ password }
            onChange={ (e) => setPassword( e.target.value )}
          />
        </label>
        <br/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;