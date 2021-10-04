import axiosClient from "./axiosClient";

const authApi =  {
    register : (params) => {
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQiTVBvoJHuBFXQsKPJLv9JGi5fIq24DA";
        return axiosClient.post("",params,{baseURL : url});
    },
    login : (params) => {
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQiTVBvoJHuBFXQsKPJLv9JGi5fIq24DA";
        return axiosClient.post("",params,{baseURL : url});
    },
    changePassword : (params) => {
        
    }
};

export default authApi;