import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import SubmittionForm from "./SubmittionForm";

import { Fragment, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import SplitView from "components/UI/SplitView";


const Submit = (props) => {

    const problems = useSelector(state => state.problem);
    const [problem, setProblem] = useState("");

    const handleChangeProblem = useCallback((id) => {
        setProblem(problems.data.find(item => item.value === +id))
    },[problems.data])

    return (
        <Fragment>
            <HeaderPage>
                Bài tập / Làm bài
            </HeaderPage>
            <Grid gap = {2} >
                <Cell>
                    <SplitView>
                        <Card classes = "mr-1 min-width">
                            <h1 className = "fs-20">Đề Bài</h1> <br />
                            <p>{problem.description}</p>
                        </Card>
                        
                    <SubmittionForm
                            handleChangeProblem = {handleChangeProblem}
                    />
                    </SplitView>
                </Cell>
                {/* <Cell width = {4}>
                </Cell> */}
            </Grid>
        </Fragment>
    )
}
export default Submit;