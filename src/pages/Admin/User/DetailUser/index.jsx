import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import DetailUserForm from "./DetailUserForm";

const DetailsUser = (props) => {

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
                    <DetailUserForm/>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default DetailsUser;