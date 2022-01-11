import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import DropDown1 from "components/UI/DropDown/DropDown1";
import Grid from "components/UI/Grid";
import { Fragment } from "react";


const Testing = (props) => {
    return (
        <Fragment>
            <Grid>
                <Cell>
                    <HeaderPage>
                        <h1>Testting Page</h1>
                    </HeaderPage>
                </Cell>
                <Cell>
                    <DropDown1/>

                </Cell>
            </Grid>
        </Fragment>
    )
}
export default Testing;