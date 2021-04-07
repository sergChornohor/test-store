import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://vuestore.getsandbox.com:443',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    crossdomain: true,
  },
});

export default axiosConfig;

// axios.defaults.baseURL = 'http://vuestore.getsandbox.com';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
