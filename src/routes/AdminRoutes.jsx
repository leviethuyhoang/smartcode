import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import AdminLayout from "../components/Layout/AdminLayout";
import Default from "../views/pages/Default";

const AdminRoutes = (props) => {

    const auth = useSelector(state => state.auth);
    
    return (
        <Fragment>
            {(auth.isLoggedIn && auth.isAdmin ) && 
                <AdminLayout>
                    <Switch>
                        <Route exact path = "/admin" component = {Default}/>
                    </Switch>
                </AdminLayout>
            }
            {!auth.isLoggedIn && <Redirect to = "/login"/>}
        </Fragment>
    )
}
export default AdminRoutes;