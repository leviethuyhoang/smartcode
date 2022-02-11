import { Route, Switch } from "react-router";
import AdminRoutes from "./AdminRoutes";

import AuthenticationRoutes from "./AuthenticateRoutes";
import MainRoutes from "./MainRoutes";

const Routes = () => {

    return (
            <Switch>
                <Route path = {["/login","/register"]}>
                        <AuthenticationRoutes/>
                </Route>
                <Route path = "/admin" >
                        <AdminRoutes/>
                </Route>
                <Route path= "/">
                        <MainRoutes/>
                </Route>
            </Switch>
    )
}
export default Routes;