import MainLayout from "components/Layout/MainLayout";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import SubmittionRoutes from "./SubmitionRoutes";
import AssignmentRoutes from "./AssignmentRoutes";

const MainRoutes = (props) => {

    return (
        <Fragment>
            <Switch>
                <MainLayout>
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