import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import AllUsers from "views/pages/Admin/User";
import AddUser from "views/pages/Admin/User/AddUser";


const UserRoutes = (props) => {
    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`} component = {AllUsers}/>
                <Route exact path = {`${match.url}/add`} component = {AddUser}/>
                <Route exact path = {`${match.url}/edit/:id`} component = {AddUser}/>
                <Route exact path = {`${match.url}/:id`} component = {AddUser}/>
            </Switch>
        </Fragment>
    )
}
export default UserRoutes;