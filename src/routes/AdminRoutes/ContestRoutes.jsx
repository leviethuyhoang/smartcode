import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import AllContest from "pages/Admin/Contest/AllContest";
import EditContest from "pages/Admin/Contest/EditContest";
import AddContest from "pages/Admin/Contest/AddContest";


const ContestRoutes = (props) => {
    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`} component = {AllContest}/>
                <Route exact path = {`${match.url}/add`} component = {AddContest}/>
                <Route exact path = {`${match.url}/edit/:id`} component = {EditContest}/>
            </Switch>
        </Fragment>
    )
}
export default ContestRoutes;