import axios from 'axios';

const recipeLoader = async ({params}) => {
    const { id } = params;
    try {
      const response = await axios.get(`https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes/${id}`);  
      return response.data;
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      return null; // Return null or handle the error as needed
    }
};

export default recipeLoader;