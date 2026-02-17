import axios from 'axios';

const instance = axios.create({
  // Твой URL на Render, который мы обсуждали в прошлых чатах
  baseURL: 'https://tea-backend-69y8.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
