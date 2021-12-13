import MainLayout from "components/Layout/MainLayout";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import SubmittionRoutes from "./SubmitionRoutes";
import AssignmentRoutes from "./AssignmentRoutes";
import ProfiletRoutes from "./ProfileRoutes";
import ContestRoutes from "./ContestRoutes";
import Submit from "pages/User/Submit";

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
                    <Route exact path = {`/submit`}>
                        <Submit/>
                    </Route>
                    <Route path = {`/profile`}>
                        <ProfiletRoutes/>
                    </Route>
                    <Route path = {`/contest`}>
                        <ContestRoutes/>
                    </Route>
                </MainLayout>
            </Switch>
        </Fragment>
    )
}
export default MainRoutes;