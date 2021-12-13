import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import { Fragment } from "react";
import { useParams } from "react-router";
import SubmittionForm from "../SubmittionForm";


const DetailSubmittion = (props) => {

    const params = useParams();
    
    return (
        <Fragment>
            <HeaderPage>
                Chi Tiết Bài Nộp
            </HeaderPage>
            <Card classes = "mt-5">
                <SubmittionForm
                    id = {params.id}
                />
            </Card>
        </Fragment>
    )
}
export default DetailSubmittion;