import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()

  return <div>
    <h1>Login</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
      setTimeout(() => {
        console.log('Login successful!');
        navigate('/dashboard');
      }, 1000);
    }}>
      <input type='email' placeholder='Type your email' />
      <br />
      <input type='password' placeholder='Type your password' />
      <br />
      <button type='submit'>Sign in</button>
        &nbsp;
      <button onClick={() => navigate('/')}>Go back</button>
    </form>
  </div>
}

export default Login