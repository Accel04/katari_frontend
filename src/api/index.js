import axios from 'axios';

const API_URL = 'http://localhost:8000';  // Reemplaza con la URL de tu backend

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.detail);
  }
};

export const fetchCompanies = async () => {
  try {
    const response = await api.get('/companies');
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.detail);
  }
}

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.detail);
  }
}
