import React from 'react'
import Recipe from '../components/Recipe';
import axios from 'axios';
import { useLoaderData } from 'react-router';

const Dashboard = () => {

  const recipes = useLoaderData();
  
  /*const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
      //.then(response => response.json())  for fetch API we need to convert response to json but for axios we don't need to do that because it is already done by axios
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);*/

    React.useEffect(() => {
      console.log('Recipes data:', recipes);
    }, [recipes]);

  return <div>
    <h1>Dashboard</h1>
    <ul>
      {
        recipes.length > 0 ? recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />) : <p>Loading recipes...</p>
      }
    </ul>
  </div>
}

export default Dashboard