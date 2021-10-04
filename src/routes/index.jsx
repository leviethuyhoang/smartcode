import { Route, Switch } from "react-router";

import AdminRoutes from "./AdminRoutes";
import AuthenticationRoutes from "./AuthenticateRoutes";

const Routes = () => {
    return (
            <Switch>
                <Route path = "/admin" >
                        <AdminRoutes/>
                </Route>

                <Route path = {["/login","/register"]}>
                        <AuthenticationRoutes/>
                </Route>
            </Switch>
    )
}
export default Routes;