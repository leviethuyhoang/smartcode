import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

import AdminLayout from "components/Layout/AdminLayout";
import AssignmentRoutes from "./AssignmentRoutes";
import UserRoutes from "./UserRoutes";
import ContestRoutes from "./ContestRoutes";
import PostRoutes from "./PostRoutes";
import LessonRoutes from "./LessonRoutes";



const AdminRoutes = (props) => {

    const auth = useSelector(state => state.auth);
    const match =  useRouteMatch();
    
    return (
        <Fragment>
            {!auth.isLoggedIn && <Redirect to = "/login"/>}
            {!auth.isAdmin && <Redirect to = "/"/>}
            {(auth.isLoggedIn && auth.isAdmin ) && 
                <AdminLayout>
                    <Switch>
                        <Route exact path = {`${match.url}`}>
                            <Redirect to = {`${match.url}/user`}/>
                        </Route>
                        <Route path = {`${match.url}/assignment`}>
                            <AssignmentRoutes/>
                        </Route>
                        <Route path = {`${match.url}/user`}>
                            <UserRoutes/>
                        </Route>
                        <Route path = {`${match.url}/contest`}>
                            <ContestRoutes/>
                        </Route>
                        <Route path = {`${match.url}/post`}>
                            <PostRoutes/>
                        </Route>
                        <Route path = {`${match.url}/lesson`}>
                            <LessonRoutes/>
                        </Route>
                    </Switch>
                </AdminLayout>
            }
            
        </Fragment>
    )
}
export default AdminRoutes;