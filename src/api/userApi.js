import axiosClient from "./axiosClient";

const usertApi =  {
    getMany : (params) => {
        const url = `/user?offset=${params.offset}&limit=${params.limit}`;
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
        return axiosClient.delete(url);
    },
};

export default usertApi;