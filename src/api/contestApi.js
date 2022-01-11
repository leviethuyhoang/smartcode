import axiosClient from "./axiosClient";

const contestApi =  {
    getMany : () => {
        const url = "/contest";
        return axiosClient.get(url);
    },
    getOne : (params) => {
        const url = `/contest/${params}`;
        return axiosClient.get(url);
    },
    getSubmission : (params) => {
        const url = `/contest/${params}/submission`;
        return axiosClient.get(url);
    },
    createOne : (params) => {
        const url = "/contest";
        return axiosClient.post(url,params);
    },
    updateOne : (params) => {
        const url = `/contest/${params.id}`;
        delete params.id;
        return axiosClient.put(url,params);
    },
    deleteOne : (id) => {
        const url = `/contest/${id}`;
        return axiosClient.delete(url);
    },
    join : (params) => {
        const url = "/contest/registerUser";
        return axiosClient.post(url,params);
    }
};

export default contestApi;