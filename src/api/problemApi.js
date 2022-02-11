import axiosClient from "./axiosClient";

const adminUrl = "/admin";

const problemApi = {
    getMany : (params) => {
        const url = '/problem';
        return axiosClient.get(url,{params : params});
    },
    getOne : (id) => {
        const url = `/problem/${id}`
        return axiosClient.get(url);
    },
    createOne : (params) => {
        const url = "/problem";
        return axiosClient.post(url,params);
    },
    upadateOne : (params) => {
        const url = `/problem/${params.id}`;
        return axiosClient.put(url,params);
    },
    deleteOne : (id) => {
        const url = `/problem/${id}`;
        return axiosClient.delete(url);
    },
    admin : {
        getMany : (params) => {
            const url = `${adminUrl}/problem`;
            return axiosClient.get(url,{params : params});
        }
    }
    
}
export default problemApi;