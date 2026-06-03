import axios from 'axios';

const recipeLoader = async ({ /*params*/ request }) => {
    //const { id } = request.params;
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id'); // Get the id from the query parameters
        console.log(id); // Log the id to verify it's being extracted correctly
        //const id = url.pathname.split('/').pop(); // Extract the id from the URL
        const response = await axios.get(`https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes/${id}`);  
        return response.data;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        return null; // Return null or handle the error as needed
    }
};

export default recipeLoader;