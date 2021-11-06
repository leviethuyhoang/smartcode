import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";

import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import EditUserForm from "./EditUserForm";


const EditUser = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-2).join("/");

    return (
        <Fragment>
            <HeaderPage>
                Sửa Tài Khoản
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link to = {urlBackWard} className = "btn btn-primary ml-auto">
                            Tất cả tài khoản
                        </Link>
                    </Wrap>
                </Cell>
                <Cell>
                    <EditUserForm/>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default EditUser;