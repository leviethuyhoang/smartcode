import axiosClient from "./axiosClient";

const submitionApi = {
    submit : (params) => {
        const url = "/submission"
        return axiosClient.post(url,params);
    },
    getOne : (id) => {
        const url = `/submission/${id}`;
        return axiosClient.get(url)
    },
    getMany : () => {
        const url = `https://testting-data-default-rtdb.firebaseio.com/submittion.json`;
        return axiosClient.get(url)
    },
    createOne : (params) => {
        const url = `https://testting-data-default-rtdb.firebaseio.com/submittion.json`;
        return axiosClient.post("",params,{baseURL : url});
    }
}
export default submitionApi;