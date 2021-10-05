import AuthenticationLayout from "components/Layout/AuthenticationLayout";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import Login from "views/pages/Authentication/Login";
import Register from "views/pages/Authentication/Register";


const AuthenticationRoutes = (props) => {
    
    const auth = useSelector(state => state.auth);

    return (
        <Fragment>
            {!auth.isLoggedIn && 
            <AuthenticationLayout>
                <Switch>
                    <Route exact path = "/login" component = {Login} />
                    <Route exact path = "/register" component = {Register} />
                </Switch>
                </AuthenticationLayout>
            }
            
            {auth.isLoggedIn && <Redirect to = "/"/>}
        </Fragment>
    )
}
export default AuthenticationRoutes;