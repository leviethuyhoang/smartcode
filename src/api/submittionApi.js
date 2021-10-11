import axiosClient from "./axiosClient";

const submitionApi = {
    getProblem : () => {
        const url = '/problem'
        return axiosClient.get(url)
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