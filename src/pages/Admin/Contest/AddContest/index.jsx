import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";


import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import AddContestForm from "./AddContestForm";
import contestApi from "api/contestApi";
import Toastify from "components/UI/Notification/Toastify";

const AddContest = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-1).join("/");
    
    const handleSubmit = (values,{setSubmitting, resetForm}) => {
        console.log("submit",values);

        const dataSend = {
            title : values.title,
            description : values.description,
            startTime : values.startTime,
            endTime : values.endTime,
            isPublic : values.isPublic,
            password : values.password,
            problemIds : values.problemIds,
        }
        console.log("submit",dataSend)
        contestApi.createOne(dataSend)
        .then( res => {
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
                THÊM KỲ THI
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
                    <AddContestForm
                        handleSubmit = {handleSubmit}
                    />
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AddContest;