import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import AllUsers from "pages/Admin/User/AllUser";
import EditUser from "pages/Admin/User/EditUser";
import AddUser from "pages/Admin/User/AddUser";


const UserRoutes = (props) => {
    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`} component = {AllUsers}/>
                <Route exact path = {`${match.url}/add`} component = {AddUser}/>
                <Route exact path = {`${match.url}/edit/:id`} component = {EditUser}/>
            </Switch>
        </Fragment>
    )
}
export default UserRoutes;