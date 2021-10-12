import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AllUsers from "pages/Admin/User";


const UserRoutes = (props) => {
    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`} component = {AllUsers}/>
            </Switch>
        </Fragment>
    )
}
export default UserRoutes;