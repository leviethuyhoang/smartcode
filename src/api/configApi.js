import axiosClient from "./axiosClient";

const configApi = {
    getConfig : () => {
        const url = "/admin/app/config"
        return axiosClient.get(url);
    }
}
export default configApi;