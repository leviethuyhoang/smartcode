import axiosClient from "./axiosClient";

const authApi =  {
    register : (params) => {
        console.log("pấm : ",params)
        const url = "/auth/register";
        return axiosClient.post(url,params);
    },
    login : (params) => {
        const url = "/auth/login"
        return axiosClient.post(url,params);
    },
    changePassword : (params) => {
        //
    }
};

export default authApi;