import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://onix-test-sandbox.getsandbox.com',
  headers: { 'Content-Type': 'application/json' },
});

export default axiosConfig;
