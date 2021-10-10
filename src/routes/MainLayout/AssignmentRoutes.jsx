import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Assignment from "views/pages/User/Assignment";


const AssignmentRoutes = (props) => {

    const match = useRouteMatch();

    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`}>
                    <Assignment/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default AssignmentRoutes;