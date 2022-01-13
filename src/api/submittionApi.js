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
        const url = `/submission`;
        return axiosClient.get(url)
    },
    getPathDownLoadFileExcel : (id) => {
        const baseURL = `http://103.161.171.48:5000`;
        const url = `${baseURL}/admin/constest/${id}/exportExcel`;
        return url;
    }
}
export default submitionApi;