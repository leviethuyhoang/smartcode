import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import AllProblems from "pages/Admin/Problems/AllProblem";
import AddProblem from "pages/Admin/Problems/AddProblem";
import EditProblem from "pages/Admin/Problems/EditProblem";


const AssignmentRoutes = (props) => {
    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`} component = {AllProblems}/>
                <Route exact path = {`${match.url}/add`} component = {AddProblem}/>
                <Route exact path = {`${match.url}/edit/:id`} component = {EditProblem}/>
                
            </Switch>
        </Fragment>
    )
}
export default AssignmentRoutes;