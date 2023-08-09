import Axios from './Axios.js';

// service register user
const registerService = async (user) => {
  const { data } = await Axios.post('/user/register', user);
  if (data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  return data;
};

// service logout function
const logoutService = () => {
  localStorage.removeItem('userInfo');
  return null;
};

// service login service
const loginService = async (user) => {
  const { data } = await Axios.post('/user/login', user);
  if (data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  return data;
};

export { registerService, logoutService, loginService };
