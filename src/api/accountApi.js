import axiosClient from "./axiosClient";

const accountApi =  {
    getMany : () => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/account.json";
        return axiosClient.get(url);
    },
    updateOne : (params) => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/account.json";
        return axiosClient.put(url);
    }
};

export default accountApi;