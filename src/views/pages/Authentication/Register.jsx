import RegisterForm from "components/Auth/Register/RegisterForm";
import { Fragment } from "react";


const Register = (props) => {

    const handleSubmit = (value) => {
        console.log("value : ",value)
    }

    return (
        <Fragment>
            <div className="container sm:px-10">
                <div className="block xl:grid grid-cols-2 gap-4">
                {/* BEGIN: Register Info */}
                <div className="hidden xl:flex flex-col min-h-screen">
                    <a href className="-intro-x flex items-center pt-5">
                    <img alt="Icewall Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
                    <span className="text-white text-lg ml-3"> Ice<span className="font-medium">wall</span> </span>
                    </a>
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