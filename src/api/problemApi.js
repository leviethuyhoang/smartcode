import axiosClient from "./axiosClient";

const problemApi = {
    getMany : () => {
        const url = `/problem`;
        return axiosClient.get(url)
    },
    createOne : (params) => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/problem.json";
        return axiosClient.post(url,params);
    },
    upadateOne : (params) => {
        const url = "";
        return axiosClient.put(url,params);
    }
    
}
export default problemApi;