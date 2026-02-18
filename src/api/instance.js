import axios from 'axios';

const instance = axios.create({
  // Vite подставит сюда значение из .env автоматически
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
