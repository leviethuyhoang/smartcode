import usertApi from "api/userApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Toastify from "components/UI/Notification/Toastify";
import Wrap from "components/UI/Wrap";

import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import EditUserForm from "./EditUserForm";


const EditUser = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-2).join("/");

    const handleSubmit = (values,{setSubmitting}, setOnEditMode) => {
        const dataSend = {
            id : values.id.toString(),
            username : values.username,
            school : values.school,
            isActive : values.isActive
        }
        usertApi.updateOne(dataSend)
        .then( res => {
            Toastify('success','Cập Nhật Người Dùng Thành Công')
        })
        .catch( error => {
            Toastify('error','Cập Nhật Người Dùng Thất Bại')
        })
        .finally( _ => {
            setSubmitting(false);
            setOnEditMode(false);
        })
    }

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
                    <EditUserForm
                        handleSubmit = {handleSubmit}
                    />
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default EditUser;