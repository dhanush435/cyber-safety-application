import axios from 'axios';

const API_BASE_URL = "https://cyber-safety-application-backend.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Threats API
export const threatsAPI = {
  // Get all threats with optional filtering
  getAll: (params = {}) => api.get('/threats', { params }),
  
  // Get threat by ID
  getById: (id) => api.get(`/threats/${id}`),
  
  // Create new threat
  create: (data) => api.post('/threats', data),
  
  // Update threat
  update: (id, data) => api.put(`/threats/${id}`, data),
  
  // Delete threat
  delete: (id) => api.delete(`/threats/${id}`),
  
  // Get threat categories
  getCategories: () => api.get('/threats/categories'),
  
  // Get threat statistics
  getStatistics: () => api.get('/threats/statistics'),
};

// Feedback API
export const feedbackAPI = {
  // Get all feedback with optional filtering
  getAll: (params = {}) => api.get('/feedback', { params }),
  
  // Get feedback by ID
  getById: (id) => api.get(`/feedback/${id}`),
  
  // Create new feedback
  create: (data) => api.post('/feedback', data),
  
  // Update feedback
  update: (id, data) => api.put(`/feedback/${id}`, data),
  
  // Delete feedback
  delete: (id) => api.delete(`/feedback/${id}`),
  
  // Get feedback statistics
  getStatistics: () => api.get('/feedback/statistics'),
};

// Auth API
export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
};

// Reports API
export const reportsAPI = {
  create: (data) => api.post('/reports', data),
  list: () => api.get('/reports'),
  publish: (id) => api.post(`/reports/${id}/publish`),
  reject: (id) => api.post(`/reports/${id}/reject`),
};

// Health check
export const healthCheck = () => api.get('/health');

export default api;
