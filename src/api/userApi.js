import axiosClient from "./axiosClient";

const usertApi =  {
    getMany : () => {
        const url = "/user";
        return axiosClient.get(url);
    },
    getOne : (id) => {
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
    createOne : (params) => {
        const url = "/user";
        return axiosClient.post(url,params);
    },
    updateOne : (params) => {
        const url = `/user/${params.id}`;
        delete params.id;
        return axiosClient.put(url,params);
    },
    deleteOne : (id) => {
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
};

export default usertApi;