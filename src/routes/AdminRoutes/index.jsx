import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

import AdminLayout from "components/Layout/AdminLayout";
import AssignmentRoutes from "./AssignmentRoutes";
import UserRoutes from "./UserRoutes";



const AdminRoutes = (props) => {

    const auth = useSelector(state => state.auth);
    const match =  useRouteMatch();
    
    return (
        <Fragment>
            {(auth.isLoggedIn && auth.isAdmin ) && 
                <AdminLayout>
                    <Switch>
                        <Route path = {`${match.url}/assignment`}>
                            <AssignmentRoutes/>
                        </Route>
                        <Route path = {`${match.url}/user`}>
                            <UserRoutes/>
                        </Route>
                    </Switch>
                </AdminLayout>
            }
            {!auth.isLoggedIn && <Redirect to = "/login"/>}
        </Fragment>
    )
}
export default AdminRoutes;