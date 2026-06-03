import React from 'react'
import { /*useParams , useLoaderData ,*/ useSearchParams } from 'react-router'
import axios from 'axios'

const RecipeDetails = () => {

  const [recipe, setRecipe] = React.useState(null);
  //const [recipe, setRecipe] = React.useLoaderData();
  //const { id } = useParams();
  const id = useSearchParams()[0].get('id');
  //const recipe = useLoaderData();

  const fetchRecipeDetails = async (/*{ params request }*/) => {
    //const { id } = request.params;
    try {
      //const id = new URL(request.url).searchParams.get('id'); // Get the id from the query parameters
      console.log(id); // Log the id to verify it's being extracted correctly
      //const id = url.pathname.split('/').pop(); // Extract the id from the URL        const response = await axios.get(`https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes/${id}`);  
      const response = await axios.get(`https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes/${id}`);
      setRecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      return null; // Return null or handle the error as needed
    }
  };

  React.useEffect(() => {
    // Here you can fetch the recipe details using the id
    // For example:
    /*const fetchRecipeDetails = async () => {
        try {
          const response = await axios.get(`https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes/${id}`);  
          setRecipe(response.data);
        } catch (error) {
          console.error('Error fetching recipe details:', error);
        }
      };*/
      fetchRecipeDetails();
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