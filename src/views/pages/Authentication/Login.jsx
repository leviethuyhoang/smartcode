import { Fragment } from "react";


const Login = (props) => {
    return (
        <Fragment>
            <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                {/* BEGIN: Login Info */}
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
                    sign in to your account.
                    </div>
                    <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">Manage all your e-commerce accounts in one place</div>
                </div>
                </div>
                {/* END: Login Info */}
                {/* BEGIN: Login Form */}
                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                    Sign In
                    </h2>
                    <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                    <div className="intro-x mt-8">
                    <input type="text" className="intro-x login__input form-control py-3 px-4 border-gray-300 block" placeholder="Email" />
                    <input type="password" className="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4" placeholder="Password" />
                    </div>
                    <div className="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">
                    <div className="flex items-center mr-auto">
                        <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
                        <label className="cursor-pointer select-none" htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href>Forgot Password?</a> 
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                    <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Login</button>
                    <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">Sign up</button>
                    </div>
                    <div className="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left">
                    By signin up, you agree to our 
                    <br />
                    <a className="text-theme-17 dark:text-gray-300" href>Terms and Conditions</a> &amp; <a className="text-theme-17 dark:text-gray-300" href>Privacy Policy</a> 
                    </div>
                </div>
                </div>
                {/* END: Login Form */}
            </div>
            </div>
            {/* BEGIN: Dark Mode Switcher*/}
            <div data-url="login-dark-login.html" className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
            <div className="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
            <div className="dark-mode-switcher__toggle border" />
            </div>
            {/* END: Dark Mode Switcher*/}
            {/* BEGIN: JS Assets*/}
            {/* END: JS Assets*/}
            
        </Fragment>
    )
}
export default Login;