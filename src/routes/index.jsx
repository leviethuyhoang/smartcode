import { Route, Switch } from "react-router";
import AdminRoutes from "./AdminRoutes";

import AuthenticationRoutes from "./AuthenticateRoutes";
import MainRoutes from "./MainRoutes";

const Routes = () => {
    return (
            <Switch>
                <Route path = "/admin" >
                        <AdminRoutes/>
                </Route>
                <Route path = {["/login","/register"]}>
                        <AuthenticationRoutes/>
                </Route>
                <Route to = "/">
                        <MainRoutes/>
                </Route>
            </Switch>
    )
}
export default Routes;