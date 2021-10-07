import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import AllAssignments from "views/pages/Admin/Assignments";


const AssignmentRoutes = (props) => {
    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`} component = {AllAssignments}/>
            </Switch>
        </Fragment>
    )
}
export default AssignmentRoutes;