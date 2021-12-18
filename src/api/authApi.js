import axiosClient from "./axiosClient";

const authApi =  {
    register : (params) => {
        // const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQiTVBvoJHuBFXQsKPJLv9JGi5fIq24DA";
        console.log("pấm : ",params)
        const url = "/auth/register";
        return axiosClient.post(url,params);
    },
    login : (params) => {
        // const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQiTVBvoJHuBFXQsKPJLv9JGi5fIq24DA";
        const url = "/auth/login"
        return axiosClient.post(url,params);
    },
    changePassword : (params) => {
        //
    }
};

export default authApi;