import React from 'react'
import { useNavigate } from 'react-router'

const Register = () => {

  const navigate = useNavigate()

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            setTimeout(() => {
                console.log('Registration successful!');
                navigate('/login');
            }, 1000);
        }}>
            <input type='text' placeholder='Username' />
            <br />
            <input type='email' placeholder='Email' />
            <br />
            <input type='password' placeholder='Password' />
            <br />
            <button type='submit'>Register</button>
            &nbsp;
            <button onClick={() => navigate('/')}>Go back</button>
        </form>
    </div>
  )
}

export default Register;