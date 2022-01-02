import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AllAssignment from "pages/User/Assignment/AllAsignment";
import DetailAssignment from "pages/User/Assignment/DetailAssignment";


const AssignmentRoutes = (props) => {

    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`}>
                    <AllAssignment/>
                </Route>
                <Route exact path = {`${match.url}/:id`}>
                    <DetailAssignment/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default AssignmentRoutes;