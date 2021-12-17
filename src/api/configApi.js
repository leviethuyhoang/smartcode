import axiosClient from "./axiosClient";

const configApi = {
    getMany : () => {
        const url = "/admin/app/config"
        return axiosClient.get(url);
    }
}
export default configApi;