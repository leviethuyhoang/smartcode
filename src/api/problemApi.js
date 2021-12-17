import axiosClient from "./axiosClient";

const problemApi = {
    getMany : () => {
        const url = '/problem'
        return axiosClient.get(url)
    },
    createOne : (params) => {
        const url = "/problem";
        return axiosClient.post(url,params);
    },
    upadateOne : (params) => {
        const url = `/problem/${params.id}`;
        return axiosClient.put(url,params);
    }
    
}
export default problemApi;