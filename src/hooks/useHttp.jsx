import { useState } from "react";


const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const sendRequest = async (request,dataConfig) => {
        setIsLoading(true);
        request()
        .then((res)=>{
            dataConfig(res);
            setIsLoading(false);
        })
        .catch((errors)=> {
            setError(errors);
        })
    }


    return {
        isLoading,
        sendRequest,
        error
    }
}
export default useHttp;