import MainLayout from "components/Layout/MainLayout";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import SubmissionRoutes from "./SubmissionRoutes";
import ProblemRoutes from "./ProblemRoutes";
import ProfiletRoutes from "./ProfileRoutes";
import ContestRoutes from "./ContestRoutes";
import Submit from "pages/User/Submit";
import Testing from "pages/Testing";

const MainRoutes = (props) => {

    return (
        <Fragment>
            <Switch>
                <MainLayout>
                    <Route path = {`/problem`}>
                        <ProblemRoutes/>
                    </Route>
                    <Route path = {`/submission`}>
                        <SubmissionRoutes/>
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
                    <Route path = {`/test`}>
                        <Testing/>
                    </Route>
                </MainLayout>
            </Switch>
        </Fragment>
    )
}
export default MainRoutes;