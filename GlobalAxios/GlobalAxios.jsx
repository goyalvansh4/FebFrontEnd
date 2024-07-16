import axios from 'axios';

const GlobalAxios = axios.create({
  baseURL: 'https://febtech-backend.onrender.com/api', // Replace with your base URL
});

export default GlobalAxios;
