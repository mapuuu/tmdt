import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:4000/v4',
});

export default Axios;
