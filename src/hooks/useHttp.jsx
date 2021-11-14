import { useCallback, useState } from "react";


const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const sendRequest = useCallback(async (request,dataConfig,params) => {
        setIsLoading(true);
        request(params && null)
        .then((res)=>{
            if(params !== undefined){  
                console.log("post",params)
                dataConfig(params);
            } else {
                console.log("get")
                dataConfig(res);
            }
            setIsLoading(false);
        })
        .catch((errors)=> {
            setError(errors);
            setIsLoading(false);
            console.log("EROR",errors)
        })
    },[])


    return {
        isLoading,
        sendRequest,
        error
    }
}
export default useHttp;