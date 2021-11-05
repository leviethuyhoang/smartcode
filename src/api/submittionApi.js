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
}
export default submitionApi;