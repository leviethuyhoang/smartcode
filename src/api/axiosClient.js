import axios from "axios";

const axiosClient = axios.create({
  baseURL : "http://103.161.171.48:5000/api/v1",
  headers : {
    'Content-type' : 'application/json',
  },
  timeout : 30000,
})

axiosClient.interceptors.request.use(async (config) => {
  console.log("request config",config)
  config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
},error => {
  return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
  if(response && response.data){
    return response.data;
  }
  return response;
},error => {
  return Promise.reject(error);
});

export default axiosClient;