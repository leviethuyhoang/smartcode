import MainLayout from "components/Layout/MainLayout";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Home from "pages/User/Home";
import SubmittionRoutes from "./SubmitionRoutes";
import AssignmentRoutes from "./AssignmentRoutes";

const MainRoutes = (props) => {

    return (
        <Fragment>
            <Switch>
                <MainLayout>
                    <Route exact path = "/">
                    <AssignmentRoutes/>
                    </Route>
                    <Route path = {`/assignment`}>
                        <AssignmentRoutes/>
                    </Route>
                    <Route path = {`/submittion`}>
                        <SubmittionRoutes/>
                    </Route>
                </MainLayout>
            </Switch>
        </Fragment>
    )
}
export default MainRoutes;