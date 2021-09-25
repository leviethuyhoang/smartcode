import { Route, Switch } from "react-router";
import AdminLayout from "../components/Layout/AdminLayout";
import Default from "../views/pages/Default";

const AdminRoutes = (props) => {
    return (
        <Route path = "/admin">
            <AdminLayout>
                <Switch>
                    <Route exact path = "/admin" component = {Default}/>
                </Switch>
            </AdminLayout>
        </Route>
    )
}
export default AdminRoutes;