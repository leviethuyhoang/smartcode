import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";


import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Wrap from "components/UI/Wrap";
import AddContestForm from "./AddContestForm";

const AddContest = (props) => {

    const match = useRouteMatch();
    const urlBackWard = match.url.split("/").slice(0,-1).join("/");
    
   

    return (
        <Fragment>
            <HeaderPage>
                THÊM KỲ THI
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
                    <AddContestForm/>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default AddContest;