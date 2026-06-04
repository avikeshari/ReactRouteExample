import React from 'react'
import Recipe from '../components/Recipe';
import axios from 'axios';
import { useLoaderData , useNavigate } from 'react-router';
import { AuthContext } from '../App.jsx';

const Dashboard = () => {

  const recipes = useLoaderData();
  const navigate = useNavigate();
  const {user, setUser} = React.useContext(AuthContext);
  
  /*const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
      //.then(response => response.json())  for fetch API we need to convert response to json but for axios we don't need to do that because it is already done by axios
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);*/

    React.useEffect(() => {
      if (!user) {
        navigate('/login');
      }
    }, [user, navigate]);

    React.useEffect(() => {
      console.log('Recipes data:', recipes);
    }, [recipes]);

  return <div>
    <p>Welcome to your dashboard {user ? user.name : 'Guest'}!</p>
    <button onClick={() => setUser(null)}>Logout</button>
    <h1>Dashboard</h1>
    <ul>
      {
        recipes.length > 0 ? recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) : <p>Loading recipes...</p>
      }
    </ul>
  </div>
}

export default Dashboard