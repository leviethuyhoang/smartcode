import axios from "axios";
import quyeryString from "query-string";


const axiosClient = axios.create({
  baseURL : "https://e633-2001-ee0-4b7b-9d80-9099-a6b4-6d17-8f49.ngrok.io/api/v1",
  headers : {
    'Content-type' : 'application/json',
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