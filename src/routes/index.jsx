import { Fragment } from "react";
import {Switch } from "react-router";
import AdminRoutes from "./AdminRoutes";
import AuthenticationRoutes from "./AuthenticateRoutes";

const Routes = () => {
    return (
        <Switch>
            <Fragment>
                <AdminRoutes/>
                <AuthenticationRoutes/>
            </Fragment>
        </Switch>
    )
}
export default Routes;