import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "app/slice/authSlice"; 
import { useHistory } from "react-router";

import RegisterForm from "components/Auth/Register/RegisterForm";
import authApi from "api/authApi";

const Register = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async (value ,{setSubmitting, setFieldError}) => {
        const params = {
            email : value.userName,
            password : value.password,
            returnSecureToken : true
        }

        authApi.register(params)
        .then((res) => {
            dispatch(authActions.register(res.idToken));
            history.replace("/admin");
        })
        .catch(error => {
            setFieldError('server', error.message);
            setSubmitting(false)
        })

    }

    return (
        <Fragment>
            <div className="container sm:px-10">
                <div className="block xl:grid grid-cols-2 gap-4">
                {/* BEGIN: Register Info */}
                <div className="hidden xl:flex flex-col min-h-screen">
                    <div className="-intro-x flex items-center pt-5">
                    <img alt="Icewall Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
                    <span className="text-white text-lg ml-3"> Ice<span className="font-medium">wall</span> </span>
                    </div>
                    <div className="my-auto">
                    <img alt="Icewall Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16" src="dist/images/illustration.svg" />
                    <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                        A few more clicks to 
                        <br />
                        sign up to your account.
                    </div>
                    <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">Manage all your e-commerce accounts in one place</div>
                    </div>
                </div>
                {/* END: Register Info */}
                    <RegisterForm onSubmit = {handleSubmit}/>
                </div>
            </div>
        </Fragment>
    )
}
export default Register;