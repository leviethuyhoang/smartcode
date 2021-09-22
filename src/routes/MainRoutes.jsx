import { Fragment } from "react";
import { Route, Switch } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import Default from "../views/pages/Default";

const MainRoutes = (props) => {
    return (
        <Fragment>
            <MainLayout>
                <Switch>
                    <Route exact path = "/" component = {Default}/>
                </Switch>
            </MainLayout>
        </Fragment>
    )
}
export default MainRoutes;