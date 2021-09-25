import { Fragment } from "react";
import "./index.css";

const AuthenticationLayout = (props) => {
    return (
      <Fragment>
          <div className = "login">
            {props.children} 
          </div>
      </Fragment>
    )
}
export default AuthenticationLayout;