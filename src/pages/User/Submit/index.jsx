import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";

import { Fragment,  } from "react";
import ShowProblem from "./ShowProblem";


const Submit = (props) => {


    return (
        <Fragment>
            <HeaderPage>
                Bài tập / Làm bài
            </HeaderPage>
            <Grid gap = {2} mt = "5">
                <Cell>
                    <ShowProblem/>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default Submit;