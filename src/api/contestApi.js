import axiosClient from "./axiosClient";

const contestApi =  {
    getMany : () => {
        const url = "https://contest-smart-code-default-rtdb.firebaseio.com/contest.json";
        return axiosClient.get(url);
    },
    createOne : (params) => {
        const url = "https://contest-smart-code-default-rtdb.firebaseio.com/contest.json";
        return axiosClient.post("",params,{baseURL : url});
    },
    editOne : (params) => {
        const url = "https://contest-smart-code-default-rtdb.firebaseio.com/contest.json";
        return axiosClient.put("",params,{baseURL : url});
    },
    deteleOne : (params) => {
        const url = "https://contest-smart-code-default-rtdb.firebaseio.com/contest.json";
        return axiosClient.put("",params,{baseURL : url});
    },
};

export default contestApi;