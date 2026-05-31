import axios from 'axios';

const recipesLoader = async () => {
    try {
        const response = await axios.get('https://6a12d11d78d0434e0d5d82d0.mockapi.io/recipes');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export default recipesLoader;