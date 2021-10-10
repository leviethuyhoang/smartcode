import axiosClient from "./axiosClient";

const submitionApi = {
    getProblem : () => {
        return axiosClient.get('http://3.133.115.242/api/v1/problem')
    },
    submit : (params) => {
        const url = "/submission"
        return axiosClient.post(url,params);
    },
    getSubmittion : (id) => {
        const url = `/submission/${id}`;
        return axiosClient.get(url)
    }
}
export default submitionApi;