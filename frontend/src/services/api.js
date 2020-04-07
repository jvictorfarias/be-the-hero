import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-the-hero-jvictorfarias.herokuapp.com',
});

export default api;
