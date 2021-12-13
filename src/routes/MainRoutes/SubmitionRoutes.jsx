import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AllSubmittion from "pages/User/Submittion/AllSubmittion";
import DetailSubmittion from "pages/User/Submittion/DetailSubmittion";


const SubmittionRoutes = (props) => {

    const match = useRouteMatch();

    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}`}>
                    <AllSubmittion/>
                </Route>

                <Route exact path = {`${match.url}/:id`}>
                    <DetailSubmittion/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default SubmittionRoutes;