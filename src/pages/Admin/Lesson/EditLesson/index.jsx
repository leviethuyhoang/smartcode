import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import EditLessonForm from "./EditLessonForm";

const EditLesson = () => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,3).join("/");

    return (
        <Fragment>
            <HeaderPage>
                CHỈNH SỬA NHÓM BÀI
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link to = {urlBackWard} className = "btn btn-primary ml-auto">
                            Tất Cả Nhóm Bài
                        </Link>
                    </Wrap>
                </Cell>
                <Cell>
                    <EditLessonForm/>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default EditLesson;