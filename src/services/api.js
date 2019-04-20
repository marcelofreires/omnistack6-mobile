import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistackbackend6.herokuapp.com',
});

export default api;
