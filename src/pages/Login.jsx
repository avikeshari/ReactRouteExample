import React from 'react'
import { Link , useNavigate } from 'react-router'
import { AuthContext } from '../App.jsx';

const Login = () => {
  const navigate = useNavigate()
  const {user, setUser} = React.useContext(AuthContext);

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return <div>
    <h1>Login</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
      setTimeout(() => {
        console.log('Login successful!');
        setUser({ name: 'John Doe' }); // Example user data
        navigate('/dashboard');
      }, 1000);
    }}>
      <input type='email' placeholder='Type your email' />
      <br />
      <input type='password' placeholder='Type your password' />
      <br />
      <button type='submit'>Sign in</button>
      {/*&nbsp;*/}
      <p>Don't have an account? <Link to='/register'>Register</Link></p>
      {/*<button onClick={() => navigate('/')}>Go back</button>*/}
    </form>
  </div>
}

export default Login