import { Fragment } from "react";
import { Link } from "react-router-dom";


const Logo = (props) => {
    return (
        <Fragment>
            <Link to = "/" className="-intro-x md:flex">
            <img alt="Icewall Tailwind HTML Admin Template" className="w-6" src="/dist/images/logo.svg" />
            <span className="text-white text-lg ml-3"> Smart<span className="font-medium">Code</span> </span>
          </Link>
        </Fragment>
    )
}
export default Logo;