import AddLesson from "pages/Admin/Lesson/AddLesson";
import AllLesson from "pages/Admin/Lesson/AllLesson";
import DetailLesson from "pages/Admin/Lesson/DetailLesson";
import EditLesson from "pages/Admin/Lesson/EditLesson";
import { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router";


const LessonRoutes = (props) => {
    const match = useRouteMatch();
    
    return (
        <Fragment>
            <Switch>
                <Route exact path = {`${match.url}/`} component = {AllLesson}/>
                <Route exact path = {`${match.url}/add`} component = {AddLesson}/>
                <Route exact path = {`${match.url}/edit/:id`} component = {EditLesson}/>
                <Route exact path = {`${match.url}/:id`} component = {DetailLesson}/>
            </Switch>
        </Fragment>
    )
}
export default LessonRoutes;