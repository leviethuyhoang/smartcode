import { Fragment } from "react";
import { Switch ,Route, useRouteMatch } from "react-router";

import AllPost from "pages/Admin/Post/AllPost";
import EditPost from "pages/Admin/Post/EditPost";
import AddPost from "pages/Admin/Post/AddPost";


const  PostRoutes = (props) => {

    const match = useRouteMatch();

    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`}>
                    <AllPost/>
                </Route>
                <Route exact path = {`${match.url}/add`}>
                    <AddPost/>
                </Route>
                <Route exact path = {`${match.url}/edit/:id`}>
                    <EditPost/>
                </Route>
            </Switch>
        </Fragment>
    )
}
export default PostRoutes;