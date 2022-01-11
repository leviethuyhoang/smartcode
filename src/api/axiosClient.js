import axios from "axios";

const axiosClient = axios.create({  
  baseURL : "https://3132-2001-ee0-4b7f-25e0-3917-d16b-79a5-cfaa.ngrok.io/api/v1",
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