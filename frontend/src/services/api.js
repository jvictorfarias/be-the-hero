import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  baseURL:
    process.env.ENV === 'production'
      ? process.env.API_URL
      : 'http://localhost:3333',
});

export default api;
