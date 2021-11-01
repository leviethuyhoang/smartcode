
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import { Fragment, useState } from "react";
import SubmittionForm from "./SubmittionForm";


const Submit = (props) => {

    const [assimentContent,setAssimentContent] = useState("");

    const setAssiment = (content) => {
        setAssimentContent(content);
    }

    return (
        <Fragment>
            <HeaderPage>
                Bài tập / Làm bài
            </HeaderPage>
            <Grid mt= "5">
                <Cell width = {6}>
                    <Card>
                        <h1 className = "fs-20">Đề Bài</h1> <br />
                        {assimentContent}
                    </Card>
                </Cell>
                <Cell width = {6}>
                    <SubmittionForm
                        setAssiment = {setAssiment}
                    />
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default Submit;