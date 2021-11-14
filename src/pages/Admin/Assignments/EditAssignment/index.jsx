
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import EditAssignmentForm from "./EditAssignmentForm";

import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";


const EditAssignment = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,3).join("/");

    return (
        <Fragment>
            <HeaderPage>
                CHỈNH SỬA BÀI TẬP
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link to = {urlBackWard} className = "btn btn-primary ml-auto">
                            Tất cả bài tập
                        </Link>
                    </Wrap>
                </Cell>
                <Cell>
                    <EditAssignmentForm/>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default EditAssignment;