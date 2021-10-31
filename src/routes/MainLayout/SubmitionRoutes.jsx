import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AllSubmittion from "pages/User/Assignment/Submittion";
import Submit from "pages/User/Assignment/Submittion/Submit";


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
            </Switch>
        </Fragment>
    )
}
export default SubmittionRoutes;