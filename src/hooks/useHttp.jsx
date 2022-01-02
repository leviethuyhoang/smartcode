import { useCallback, useState } from "react";


const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const sendRequest = useCallback(async (request,dataConfig,params) => {
        setIsLoading(true);
    
        request(params ? params : null)
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

    const SendRequest = useCallback( async (Request, configData, configOption) => {
        if(typeof(Request) === 'function'){
            setIsLoading(true);
            Request()
            .then(res => {
                console.log("(hook) Request Thanh Cong");
                configData(res, configOption);
            })
            .catch( error => {
                console.log("(hook) ERROR Request", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
            
        } else {
            console.log("Loi Post request custom hook")
        }
    },[])


    return {
        isLoading,
        error,
        sendRequest,
        SendRequest,
    }
}
export default useHttp;