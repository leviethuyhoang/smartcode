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
        const baseURL = `https://3132-2001-ee0-4b7f-25e0-3917-d16b-79a5-cfaa.ngrok.io/api/v1`;
        const url = `${baseURL}/admin/constest/${id}/exportExcel`;
        return url;
    }
}
export default submitionApi;