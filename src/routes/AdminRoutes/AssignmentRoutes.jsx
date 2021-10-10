import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import AllAssignments from "views/pages/Admin/Assignments";
import AddAssignment from "views/pages/Admin/Assignments/AddAssignment";
import EditAssignment from "views/pages/Admin/Assignments/EditAssignment";


const AssignmentRoutes = (props) => {
    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`} component = {AllAssignments}/>
                <Route exact path = {`${match.url}/add`} component = {AddAssignment}/>
                <Route exact path = {`${match.url}/edit/:id`} component = {EditAssignment}/>
            </Switch>
        </Fragment>
    )
}
export default AssignmentRoutes;