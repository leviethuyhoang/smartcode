import axiosClient from "./axiosClient";

const problemApi = {
    getProblem : () => {
        const url = '/problem'
        return axiosClient.get(url)
    },
    
}
export default problemApi;