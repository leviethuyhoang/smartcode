import axiosClient from "./axiosClient";

const postApi =  {
    getMany : () => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/post.json";
        return axiosClient.get(url);
    },
};

export default postApi;