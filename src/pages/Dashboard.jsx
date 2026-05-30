import React from 'react'
import Recipe from '../components/Recipe';
import axios from 'axios';

const Dashboard = () => {

  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
      //.then(response => response.json())  for fetch API we need to convert response to json but for axios we don't need to do that because it is already done by axios
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);

  return <div>
    <h1>Dashboard</h1>
    <ul>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  </div>
}

export default Dashboard