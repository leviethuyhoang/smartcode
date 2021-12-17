import AllContest from "pages/User/Contest/AllContest";
import DetailsContest from "pages/User/Contest/DetailContest";
import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";


const ContestRoutes = (props) => {

    const match = useRouteMatch();

    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/:id`}>
                    <DetailsContest/>
                </Route>

                <Route exact path = {`${match.url}`}>
                    <AllContest/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default ContestRoutes;