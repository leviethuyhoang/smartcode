import { Fragment } from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Wrap from "components/UI/Wrap";
import { Link } from "react-router-dom";
import EditContestForm from "./EditContestForm";
import Grid from "components/UI/Grid";
import Cell from "components/UI/Cell";

const EditContest = (props) => {

  const match = useRouteMatch();
  const urlBackWard = match.url.split("/").slice(0,-2).join("/");
    
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
                    <EditContestForm/>
                </Cell>
            </Grid>
        </Fragment>
    )
};
export default EditContest;
