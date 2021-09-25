import axios from "axios";
import quyeryString from "query-string";





const axiosClient = axios.create({
  baseURL : process.env.REACT_APP_API_URL,
  headers : {
    'content-type' : 'application/json',
  },
  paramsSerializer : params => quyeryString.stringify(params)
})

axios.interceptors.request.use(function (config) {
  return config;
},error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  if(response && response.data){
    return response.data;
  }
},error => {
  return Promise.reject(error);
});

export default axiosClient;