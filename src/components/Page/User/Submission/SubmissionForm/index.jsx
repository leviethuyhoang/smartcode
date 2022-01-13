import Cell from "components/UI/Cell";
import CodeEditor from "components/UI/CodeEditor";
import Grid from "components/UI/Grid";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";

import "./SubmittionForm.css"
import { Fragment } from "react";
import ConvertDate from "util/ConvertDate";
import ShowResult from "./ShowResult";

const SubmittionForm = (props) => {

    const { problem, user, createdAt, sourceCode, results, language} = props.submissionInfor;
    return (
        <Fragment>
            <Grid gap="3" >
                <Cell>
                    <div className="w-full flex justify-center">
                        <h1 className="font-medium">{problem.title}</h1>
                    </div>
                    <div className = "flex flex-row justify-space-around mt-5">
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
                    { results ? 
                        <Fragment>
                        <div className = "flex flex-col w-full">
                                <ShowResult
                                results = {results}
                            />
                        </div>
                        </Fragment>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock block mx-auto"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    }
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default SubmittionForm;