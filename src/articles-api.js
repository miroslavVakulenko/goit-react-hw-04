// import axios from 'axios';
// //https://jsonplaceholder.typicode.com
// //https://65d889dac96fbb24c1bbbc49.mockapi.io/api/v1

// // axios.defaults.baseURL = 'https://65d889dac96fbb24c1bbbc49.mockapi.io/api/v1';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// const fetchArticles = async () => {
//   const response = await axios.get('/posts');
//   return response.data;
// };

// export default fetchArticles;

import axios from 'axios';

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

const fetchArticles = async (searchQuery, currentPage) => {
  // const response = await axios.get(`/search?query=${searchQuery}`);

  const response = await axios.get('/search', {
    params: {
      query: searchQuery,
      hitsPerPage: 10,
      page: currentPage,
    },
  });
  return response.data.hits;
};

export default fetchArticles;
