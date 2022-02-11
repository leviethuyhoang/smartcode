import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AllSubmission from "pages/User/Submission/AllSubmission";
import DetailSubmission from "pages/User/Submission/DetailSubmission";


const SubmissionRoutes = (props) => {

    const match = useRouteMatch();

    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}`}>
                    <AllSubmission/>
                </Route>
                <Route exact path = {`${match.url}/:id`}>
                    <DetailSubmission/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default SubmissionRoutes;