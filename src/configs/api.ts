import axios from 'axios';

const api = axios.create({
  baseURL: 'https://recruitment-test.flip.id/frontend-test',
  timeout: 10000,
});

axios.interceptors.request.use(request => {
  console.log(`[REQ] ${request.method?.toUpperCase()} ${request.url}`);
  console.log('Headers:', request.headers);
  console.log('Data:', request.data);
  return request;
});

axios.interceptors.response.use(
  response => {
    console.log(`[RES] ${response.status} ${response.config.url}`);
    console.log('Data:', response.data);
    return response;
  },
  error => {
    console.log('[ERR]', error?.message);
    console.log('Detail:', error?.response?.data || error);
    return Promise.reject(error);
  },
);

export default api;
