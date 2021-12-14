import { Fragment, useEffect } from "react";

import Cell from "components/UI/Cell";
import CodeEditor from "components/UI/CodeEditor";
import Grid from "components/UI/Grid";

import "./SubmittionForm.scss"
import HeaderPage from "components/Page/Admin/Page/HeaderPage";

const SubmittionForm = (props) => {

    const {id} = props;

    useEffect(() => {

    },[])

    return (
        <Fragment>
            <Grid mt = "5">
                <Cell>
                    <div className = "infor">
                        <div>{id}</div>
                    </div>
                </Cell>
                <Cell>
                    <CodeEditor
                        type = "read"
                        source_code = "HELLO WORLD"
                    />
                </Cell>
                <Cell>
                    <HeaderPage>
                        Kết Quả Chấm
                    </HeaderPage>
                    <div className = "flex flex-col w-full">
                        <div className = "btn btn-danger-soft w-full mr-1 mb-2 block">
                            <Grid>
                                1
                                <Cell width = {3}> 
                                    Input : {2}
                                </Cell>
                                <Cell width = {4}> 
                                    Output : {10}
                                </Cell>
                                <Cell width = {4}> 
                                    Đáp Án : {20}
                                </Cell>
                            </Grid>
                        </div>
                        <div className = "btn btn-success-soft w-full mr-1 mb-2 block">
                            <Grid>
                                2
                                <Cell width = {3}> 
                                    Input : {2}
                                </Cell>
                                <Cell width = {4}> 
                                    Output : {10}
                                </Cell>
                                <Cell width = {4}> 
                                    Đáp Án : {10}
                                </Cell>
                            </Grid>
                        </div>
                        <div className = "btn btn-danger-soft w-full mr-1 mb-2 block">
                            <Grid>
                                3
                                <Cell width = {3}> 
                                    Input : {2}
                                </Cell>
                                <Cell width = {4}> 
                                    Output : {10}
                                </Cell>
                                <Cell width = {4}> 
                                    Đáp Án : {20}
                                </Cell>
                            </Grid>
                        </div>
                        <div className = "btn btn-success-soft w-full mr-1 mb-2 block text-left">
                            <Grid>
                                4
                                <Cell width = {3}> 
                                    Input : {2}
                                </Cell>
                                <Cell width = {4}> 
                                    Output : {10}
                                </Cell>
                                <Cell width = {4}> 
                                    Đáp Án : {10}
                                </Cell>
                            </Grid>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default SubmittionForm;