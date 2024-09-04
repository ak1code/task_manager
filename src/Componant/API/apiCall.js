import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.108:112/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // You can add more common headers here
  },
});

const apiService = {
  get: (url, config = {}) => api.get(url, config),
  post: (url, data, config = {}) => api.post(url, data, config),
  put: (url, data, config = {}) => api.put(url, data, config),
  delete: (url, config = {}) => api.delete(url, config),

  // You can also create specific methods for your API endpoints
  // getUserData: (userId) => api.get(`/users/${userId}`),
  // createPost: (postData) => api.post('/posts', postData),
  // Add more specific methods as needed
};

export default apiService;
