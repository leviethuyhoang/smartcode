import axiosClient from "./axiosClient";

const lessonApi = {
    getMany : () => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/lesson.json"
        return axiosClient.get(url);
    },
    createOne : (params) => {
        const url = "https://testting-data-default-rtdb.firebaseio.com/lesson.json";
        return axiosClient.post("",params,{baseURL : url});
    },
}
export default lessonApi;