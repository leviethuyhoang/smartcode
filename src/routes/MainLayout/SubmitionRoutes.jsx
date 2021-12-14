import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AllSubmittion from "pages/User/Submittion/AllSubmittion";
import Submit from "pages/User/Submit";
import Submittion from "pages/User/Submittion/Submitton";


const SubmittionRoutes = (props) => {
    const match = useRouteMatch();
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}`}>
                    <AllSubmittion/>
                </Route>
                <Route exact path = {`${match.url}/submit`}>
                    <Submit/>
                </Route>
                <Route exact path = {`${match.url}/:id`}>
                    <Submittion/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default SubmittionRoutes;