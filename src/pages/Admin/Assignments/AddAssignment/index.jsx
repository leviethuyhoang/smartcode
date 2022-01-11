import problemApi from "api/problemApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Toastify from "components/UI/Notification/Toastify";
import Wrap from "components/UI/Wrap";
import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import AddAssignmentForm from "./AddAssignForm";


const AddAssignment = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-1).join("/");

    const handleSubmit = (values,{setSubmitting, resetForm}) => {
        console.log("submit problem",values)

        problemApi.createOne(values)
        .then( _ => {
            Toastify('success','Thêm Bài Tập Thành Công');
            resetForm(true);
        })
        .catch( _ => {
            Toastify('error','Thêm Bài Tập Thất Bại');
        })
        .finally( _ => {
            setSubmitting(false);
        })
    }

    return (
        <Fragment>
            <HeaderPage>
                THÊM BÀI TẬP
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
                    <AddAssignmentForm
                        handleSubmit = {handleSubmit}
                    />
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AddAssignment;