import { toast } from "react-toastify";


const Toastify = (type,message,config) => {

    const toastConfig = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    
    const types = "success/warning/error";

    if(types.includes(type.toLowerCase())) {
        return toast[type](
            message,
            toastConfig,
            {...config}
        )
    } else {
        return toast(
            message,
            toastConfig,
            {...config}
        )
    }
}
export default Toastify;