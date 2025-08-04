// frontend/src/services/aservice.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL; // Backend is running on port 3000

export const apiService = {
  register: async (fullName, email, password) => {
    const response = await axios.post(`${API_URL}/register`, {
      fullName,
      email,
      password,
    });
    return response.data;
  },
};
