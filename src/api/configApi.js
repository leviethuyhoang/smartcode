import axiosClient from "./axiosClient";

const configApi = {
    getConfig : () => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/config.json"
        return axiosClient.get(url);
    }
}
export default configApi;