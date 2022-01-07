import Cell from "components/UI/Cell";
import CodeEditor from "components/UI/CodeEditor";
import Grid from "components/UI/Grid";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";

import "./SubmittionForm.css"
import { Fragment } from "react";
import ConvertDate from "util/ConvertDate";

const SubmittionForm = (props) => {

    const { submissionInfor } = props;
    return (
        <Fragment>
            <Grid gap="2" >
                <Cell>
                    <div className = "flex flex-row justify-space-around">
                        <p><b>Người Code :</b> {"Coder"}</p>
                        <p><b>Ngày Nộp : </b>{ConvertDate.getDateNomal(submissionInfor.createdAt)}</p>
                        <p><b>Ngôn Ngữ :</b> {submissionInfor.languageId}</p>
                    </div>
                    <div className="w-full flex justify-center mt-5">
                        <b className="text-lg mx-auto">{submissionInfor.problem.title}</b>
                    </div>
                </Cell>
                <Cell>
                    <CodeEditor
                        type = "read"
                        sourceCode = {submissionInfor.sourceCode}
                    />
                </Cell>
                <Cell>
                    <HeaderPage>
                        Kết Quả Chấm
                    </HeaderPage>
                    <div className = "flex flex-col w-full">

                    {submissionInfor.results.length > 0 ? submissionInfor.results.map((item,index) =>  {
                        return <div key = {index} className = {`btn ${item.status.description === "Accepted" ? "btn-success-soft" : item.status.description === 'Pending' ? "btn-warning-soft": "btn-danger-soft" } w-full mr-1 mb-2 block`}>
                                <Grid>
                                    <Cell width = {2}>
                                        {index+1}
                                    </Cell>
                                    <Cell width = {4}> 
                                        <div style = {{whiteSpace : "pre" , textAlign : "left"}}> <b>Input :</b> {item.stdin} </div>
                                    </Cell>
                                    <Cell width = {4}> 
                                        <div style = {{whiteSpace : "pre", textAlign : "left"}}> <b>Output :</b> {item.stdout} </div>
                                    </Cell>
                                    <Cell width = {2}> 
                                        <div style = {{whiteSpace : "pre", textAlign : "left"}}> <b>Kết Quả : </b>{`${item.status.description}`} </div>
                                    </Cell>
                                </Grid>
                            </div>
                    })
                    :
                        <div className="w-32 mx-auto">CHƯA CÓ KẾT QUẢ</div>    
                    }
                    </div>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default SubmittionForm;