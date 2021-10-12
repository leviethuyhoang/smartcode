
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import { Fragment } from "react";
import SubmittionForm from "./SubmittionForm";


const Submit = (props) => {
    return (
        <Fragment>
            <HeaderPage>
                Bài tập / Làm bài
            </HeaderPage>
            <Grid mt= "5">
                <Cell width = {3}>
                    <Card>
                        <h1 className = "fs-20">Đề Bài</h1> <br />
                    Tính bình phương của một số
                    </Card>
                </Cell>
                <Cell width = {9}>
                    <SubmittionForm/>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default Submit;