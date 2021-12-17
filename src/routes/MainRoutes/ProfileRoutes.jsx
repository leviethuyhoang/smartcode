import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Profile from "pages/User/Profile";


const ProfiletRoutes = (props) => {

    const match = useRouteMatch();

    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/:id`}>
                    <Profile/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default ProfiletRoutes;