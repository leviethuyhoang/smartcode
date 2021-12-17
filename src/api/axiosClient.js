import axios from "axios";
import quyeryString from "query-string";


const axiosClient = axios.create({
  baseURL : "https://c71d-113-176-107-143.ngrok.io/api/v1",
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