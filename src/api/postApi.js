import axiosClient from "./axiosClient";

const postApi =  {
    getMany : () => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/post.json";
        return axiosClient.get(url);
    },
    createOne : (params) => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/post.json";
        return axiosClient.post("", params, {baseURL : url});
    }
};

export default postApi;