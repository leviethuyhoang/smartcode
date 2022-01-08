import Cell from "components/UI/Cell";
import CodeEditor from "components/UI/CodeEditor";
import Grid from "components/UI/Grid";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";

import "./SubmittionForm.css"
import { Fragment } from "react";
import ConvertDate from "util/ConvertDate";
import ShowResult from "./ShowResult";

const SubmittionForm = (props) => {

    const { problem, user, createdAt, language, sourceCode, results} = props.submissionInfor;
    return (
        <Fragment>
            <Grid gap="3" >
                <Cell>
                    <div className="w-full flex justify-center">
                        <b className="text-lg mx-auto">{problem.title}</b>
                    </div>
                    <div className = "flex flex-row justify-space-around mt-2">
                        <p><b>Người Code :</b> {user.username}</p>
                        <p><b>Ngày Nộp : </b>{ConvertDate.getDateNomal(createdAt)}</p>
                        <p><b>Ngôn Ngữ :</b> {language.name}</p>
                    </div>
                </Cell>
                <Cell>
                    <CodeEditor
                        type = "read"
                        sourceCode = {sourceCode}
                    />
                </Cell>
                <Cell>
                    <HeaderPage>
                        Kết Quả Chấm
                    </HeaderPage>
                    <div className = "flex flex-col w-full">
                        <ShowResult
                            results = {results}
                        />
                    </div>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default SubmittionForm;