// src/api/authApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/register'; // Replace with your actual API URL
const API_URL_Login = 'http://localhost:5000/api/auth/login';
// Register API request
export const registerUserApi = async (newUser) => {
  const response = await axios.post(`${API_URL}/register`, newUser);
  return response.data; // Assume the API returns the user data after registration
};

// Login API request
export const loginUserApi = async (credentials) => {
  const response = await axios.post(`${API_URL_Login}/login`, credentials);
  return response.data; // Assume the API returns the user data and a token
};
