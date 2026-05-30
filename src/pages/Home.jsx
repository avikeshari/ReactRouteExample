import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => navigate('/register')}>Register</button>
    &nbsp;
    <button onClick={() => navigate('/login')}>Login</button>
  </div>
  //Button on click location can be given as: window.location.href = '/register'
}

export default Home