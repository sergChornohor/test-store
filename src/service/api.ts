import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://vuestore.getsandbox.com:443',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosConfig;
