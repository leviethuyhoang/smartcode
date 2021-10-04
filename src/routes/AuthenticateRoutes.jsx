import AuthenticationLayout from "components/Layout/AuthenticationLayout";
import { Route, Switch } from "react-router";
import Login from "views/pages/Authentication/Login";
import Register from "views/pages/Authentication/Register";


const AuthenticationRoutes = (props) => {
    
    return (
        
        <Route path = {["/login","/register"]}>
            <AuthenticationLayout>
                <Switch>
                    <Route exact path = "/login" component = {Login} />
                    <Route exact path = "/register" component = {Register} />
                </Switch>
            </AuthenticationLayout>
        </Route>
    )
}
export default AuthenticationRoutes;