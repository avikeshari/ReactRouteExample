import React from 'react'
import Recipe from '../components/Recipe';

const Dashboard = () => {

  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
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