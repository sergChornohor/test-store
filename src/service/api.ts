import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://vuestore.getsandbox.com',
  headers: { 'Content-Type': 'application/json' },
});

export default axiosConfig;
