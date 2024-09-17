import axios from 'axios';

// axios.defaults.baseURL = 'https://api.unsplash.com/';

// const fetchImages = async query => {
//   const responce = axios.get({
//     params: {
//       name: query,
//       limit: 4,
//     },
//     headers: {
//       'Accept-Version': 'v1',
//     },
//   });
//   return (await responce).data;
// };

// export default fetchImages;

const ACCESS_KEY = 'eYYSGZUWWTTgB6f6zSeTfY9VgEQjgKmW1m7dd8IhXGQ'; // Replace with your Unsplash Access Key

const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query, per_page: 8, page },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    console.log('a');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data from Unsplash:', error);
    throw error;
  }
};

export default fetchImages;
