import axios from 'axios';

const api = axios.create({
  // UPDATED: Now points directly to your live Render backend!
  baseURL: import.meta.env.VITE_API_URL || 'https://mentorship-backend-r9vb.onrender.com/api',
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized access - session expired or invalid.');
    }
    return Promise.reject(error);
  }
);

export default api;