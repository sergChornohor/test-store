import axios from 'axios';

export default axios.create({
  baseURL: 'https://vuestore.getsandbox.com:443',
  headers: { 'Content-Type': 'application/json' },
});
