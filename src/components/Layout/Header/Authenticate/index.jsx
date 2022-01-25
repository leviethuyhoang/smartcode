import { Fragment } from "react";
import { Link } from "react-router-dom";


const Authenticate = (props) => {
    return (
        <Fragment>
            <Link to = "/login" className = "btn btn-rounded-dark mr-2">
                Đăng Nhập
            </Link>
            <Link to = "/register" className = "btn btn-rounded-secondary">
                Đăng Ký
            </Link>
        </Fragment>
    )
}
export default Authenticate;