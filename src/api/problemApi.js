import axiosClient from "./axiosClient";

const problemApi = {
    getProblem : () => {
        const url = 'https://testting-data-default-rtdb.firebaseio.com/problem.json'
        return axiosClient.get(url)
    },
    
}
export default problemApi;