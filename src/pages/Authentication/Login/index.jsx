import { Fragment } from "react";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import authApi from "api/authApi";
import LoginForm from "pages/Authentication/Login/LoginForm";
import { authActions } from "app/slice/authSlice";
import { Link } from "react-router-dom";

const Login = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (value,{setSubmitting,setFieldError}) => {

            const params = {
                email : value.email,
                password : value.password,
                // returnSecureToken : true
            }
            console.log("params",params)
            authApi.login(params)
            .then((res) => {
                dispatch(authActions.login(res));
                history.replace("/admin");
            })
            .catch(error => {
                setFieldError('server',error.message);
                console.log("ERROR",error)
                setSubmitting(false);
            })
    }
    return (
        <Fragment>
            <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                {/* BEGIN: Login Info */}
                <div className="hidden xl:flex flex-col min-h-screen">
                <Link to = "/"  className="-intro-x flex items-center pt-5">
                    <img alt="Icewall Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
                    <span className="text-white text-lg ml-3"> Smart<span className="font-medium">Code</span> </span>
                </Link>
                <div className="my-auto">
                    <img alt="Icewall Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16" src="dist/images/illustration.svg" />
                    <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                    A few more clicks to 
                    <br />
                    sign in to your account.
                    </div>
                    <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">Manage all your e-commerce accounts in one place</div>
                </div>
                </div>
                {/* END: Login Info */}
                <LoginForm onSubmit = {handleSubmit}/>
                
            </div>
            </div>
            {/* BEGIN: JS Assets*/}
            {/* END: JS Assets*/}
            
        </Fragment>
    )
}
export default Login;