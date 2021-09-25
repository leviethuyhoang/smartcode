import { Fragment } from "react";


const Register = (props) => {
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
                {/* BEGIN: Register Form */}
                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                        Sign Up
                    </h2>
                    <div className="intro-x mt-2 text-gray-500 dark:text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                    <div className="intro-x mt-8">
                        <input type="text" className="intro-x login__input form-control py-3 px-4 border-gray-300 block" placeholder="First Name" />
                        <input type="text" className="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4" placeholder="Last Name" />
                        <input type="text" className="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4" placeholder="Email" />
                        <input type="text" className="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4" placeholder="Password" />
                        <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
                        <div className="col-span-3 h-full rounded bg-theme-10" />
                        <div className="col-span-3 h-full rounded bg-theme-10" />
                        <div className="col-span-3 h-full rounded bg-theme-10" />
                        <div className="col-span-3 h-full rounded bg-gray-200 dark:bg-dark-2" />
                        </div>
                        <a href className="intro-x text-gray-600 block mt-2 text-xs sm:text-sm">What is a secure password?</a> 
                        <input type="text" className="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4" placeholder="Password Confirmation" />
                    </div>
                    <div className="intro-x flex items-center text-gray-700 dark:text-gray-600 mt-4 text-xs sm:text-sm">
                        <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
                        <label className="cursor-pointer select-none" htmlFor="remember-me">I agree to the Envato</label>
                        <a className="text-theme-17 dark:text-gray-300 ml-1" href>Privacy Policy</a>. 
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Register</button>
                        <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">Sign in</button>
                    </div>
                    </div>
                </div>
                {/* END: Register Form */}
                </div>
            </div>
        </Fragment>
    )
}
export default Register;