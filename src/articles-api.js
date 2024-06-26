import axios from 'axios';
//https://jsonplaceholder.typicode.com
//https://65d889dac96fbb24c1bbbc49.mockapi.io/api/v1

// axios.defaults.baseURL = 'https://65d889dac96fbb24c1bbbc49.mockapi.io/api/v1';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const fetchArticles = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export default fetchArticles;
