import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with the production URL in a production environment

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Error status:', error.response.status);
      console.error('Error response:', error.response.data);
      throw new Error(error.response.data.message || 'Login failed');
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received:', error.request);
      throw new Error('No response from server. Please try again later.');
    } else {
      // Something else happened in setting up the request
      console.error('Error:', error.message);
      throw new Error('Login error: ' + error.message);
    }
  }
};
