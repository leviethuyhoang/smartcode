
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import EditAssignmentForm from "./EditAssignmentForm";

import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import problemApi from "api/problemApi";
import Toastify from "components/UI/Notification/Toastify";
import { useHistory } from "react-router-dom";


const EditAssignment = (props) => {

    const match = useRouteMatch();
    const history = useHistory();
    const urlBackWard = match.url.split("/").slice(0,3).join("/");

    const handleSubmit = (values,{setSubmitting}) => {
        const dataSend = {
            id : `${values.id}`,
            title: values.title,
            isPublished : values.isPublished,
            point: values.point,
            description: values.description,
            sampleTestCases: values.sampleTestCases,
            testCases: values.testCases.map( item => {return {stdin : item.stdin, stdout : item.stdout}}),
            timeLimit: values.timeLimit,
            memoryLimit: values.memoryLimit,
        }
        console.log("values",dataSend)
        problemApi.upadateOne(dataSend)
        .then( res => {
            Toastify('success','Cập Nhật Bài Tập Thành Công')
            history.goBack();
        })
        .catch(error => {
            setSubmitting(false)
            Toastify('error','Cập Nhật Bài Tập Thất Bại')
            console.log("My ERROR",error)
        })
    }

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
                    <EditAssignmentForm
                        handleSubmit =  {handleSubmit}
                    />
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default EditAssignment;