import axios from 'axios';

const baseURL = 'http://localhost:8000/api/';
const accessToken = 'seu_access_token_do_OAuth2';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
});

export default api;
