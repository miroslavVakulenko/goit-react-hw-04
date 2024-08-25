import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchImages = async query => {
  const responce = axios.get({
    params: {
      name: query,
      limit: 4,
    },
    headers: {
      'Accept-Version': 'v1',
    },
  });
  return (await responce).data;
};

export default fetchImages;
