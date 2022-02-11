import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AllProblem from "pages/User/Problem/AllProblem";
import DetailProblem from "pages/User/Problem/DetailProblem";

const ProblemRoutes = (props) => {

    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`}>
                    <AllProblem/>
                </Route>
                <Route exact path = {`${match.url}/:id`}>
                    <DetailProblem/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default ProblemRoutes;