import usertApi from "api/userApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Toastify from "components/UI/Notification/Toastify";
import Wrap from "components/UI/Wrap";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import AddUserForm from "./AddUserForm";


const AddUser = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-1).join("/");

    const handleSubmit = (values,{setSubmitting, resetForm}) => {
        usertApi.createOne(values)
        .then( res => {
            Toastify('success','Tạo Tài Khoản Thành Công')
            resetForm(true)
        })
        .catch( error => {
            Toastify('error','Tạo Tài Khoản Thất Bại')
        })
        .finally( _ => {
            setSubmitting(false);
        })
    }

    return (
        <Fragment>
            <HeaderPage>
                TẠO TÀI KHOẢN
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
                    <AddUserForm
                        handleSubmit = {handleSubmit}
                    />
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AddUser;