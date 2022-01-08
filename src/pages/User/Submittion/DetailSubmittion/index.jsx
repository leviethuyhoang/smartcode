import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import { Fragment } from "react";
import SubmittionForm from "../SubmittionForm";


const DetailSubmittion = (props) => {
    
    return (
        <Fragment>
            <HeaderPage>
                Chi Tiết Bài Nộp
            </HeaderPage>
            <Card classes = "mt-5">
                <SubmittionForm/>
            </Card>
        </Fragment>
    )
}
export default DetailSubmittion;