import { Fragment } from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Wrap from "components/UI/Wrap";
import { Link } from "react-router-dom";
import EditContestForm from "./EditContestForm";
import Grid from "components/UI/Grid";
import Cell from "components/UI/Cell";
import contestApi from "api/contestApi";
import Toastify from "components/UI/Notification/Toastify";

const EditContest = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-2).join("/");
    
    const handleSubmit = (values, {setSubmitting}) => {
        console.log("values",values);
        const dataSend = {
            id : values.id,
            title: values.title,
            description: values.description,
            startTime: values.startTime,
            endTime: values.endTime,
            isPublic: values.isPublic,
            password: values.password,
            problemIds: values.problemIds,
        }
        console.log("sumbit",dataSend);

        contestApi.updateOne(dataSend)
        .then( res => {
            console.log("Thanh Cong",res)
            Toastify('success','Cập Nhật Kỳ Thi Thành Công');
        })
        .catch( error => {
            console.log("error",error);
            Toastify('error', 'Cập Nhất Kỳ Thi Thất Bại');
        })
        .finally( _ => {
            setSubmitting(false);
        })
    }


    return (
        <Fragment>
            <HeaderPage>
                CHỈNH SỬA KỲ THI
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
                    <EditContestForm
                        handleSubmit = {handleSubmit}
                    />
                </Cell>
            </Grid>
        </Fragment>
    )
};
export default EditContest;
