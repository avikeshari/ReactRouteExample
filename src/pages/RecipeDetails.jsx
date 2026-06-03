import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const RecipeDetails = () => {

  const [recipe, setRecipe] = React.useState({});

  const { id } = useParams();
  console.log(id); // Access the id parameter from the route

  React.useEffect(() => {
    // Here you can fetch the recipe details using the id
    // For example:
    axios.get(`https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipe details:', error);
      });
  }, []);

  return (
    <div>
      {
        recipe ? (
          <div>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
          </div>
        ) : (
        <p>Recipe not found</p>
        )
      }
    </div>
  )
}

export default RecipeDetails