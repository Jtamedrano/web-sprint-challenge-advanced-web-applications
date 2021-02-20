import axios from 'axios';

const axiosWithAuth = () => {
  let token = window.localStorage.getItem('token');

  token = token ? token : '';

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      authorization: token,
    },
  });
};

export default axiosWithAuth;
