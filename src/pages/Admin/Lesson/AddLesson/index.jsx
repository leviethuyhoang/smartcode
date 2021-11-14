import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import AddLessonForm from "./AddLessonForm";


const AddLesson = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-1).join("/")

    return (
        <Fragment>
            <HeaderPage>
                Thêm Nhóm Bài
            </HeaderPage>
            <Grid>
                <Cell>
                    <Wrap>
                        <Link to = {urlBackWard} className = "btn btn-primary ml-auto">
                            Tất cả kỳ thi
                        </Link>
                    </Wrap>
                </Cell>
                <Cell>
                    <AddLessonForm />
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AddLesson;