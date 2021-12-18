import axios from "axios";
import quyeryString from "query-string";


const axiosClient = axios.create({
  baseURL : "https://0928-2001-ee0-4b4b-6930-a8dc-7c58-ee45-36e1.ngrok.io/api/v1",
  headers : {
    'Content-type' : 'application/json',
    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`,
  },
  paramsSerializer : params => quyeryString.stringify(params)
})

axiosClient.interceptors.request.use(async (config) => {
  console.log("config",config)
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