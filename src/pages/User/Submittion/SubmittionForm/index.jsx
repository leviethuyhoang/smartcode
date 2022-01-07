import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import Cell from "components/UI/Cell";
import CodeEditor from "components/UI/CodeEditor";
import Grid from "components/UI/Grid";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Loading1 from "components/UI/Loading/Loading1"

import "./SubmittionForm.css"

const SubmittionForm = (props) => {

    const params = useParams();
    const {id} = props;

    const allsubmittion = useSelector(state => state.submittion);
    const [submittion, setSubmittion] = useState(null);

    useEffect(() => {
        if(submittion == null){
            const idSubmittion = id || params.id
            setSubmittion(allsubmittion.data.find(item => +item.id === +idSubmittion))
        } 
    },[allsubmittion, id, params.id, submittion])

    return (
        <Fragment>
            <Grid >
                {submittion ? 
                <Fragment>
                    <Cell>
                        <div className = "flex flex-row flex-space-around infor">
                            <span><b>ID : </b>{id}</span>
                            <span><b>Người Code :</b> {"Coder"}</span>
                            <span><b>Ngày Nộp : </b>{new Date().getTime()}</span>
                            <span><b>Tên Bài Tập :</b> {submittion.problem.title}</span>
                            <span><b>Ngôn Ngữ :</b> {"C++"}</span>
                            <span><b>Thời Gian Chạy :</b> {"1"}ms</span>
                            <span><b>Bộ Nhớ : </b>{"1"}kb</span>
                        </div>
                    </Cell>
                    <Cell>
                        <CodeEditor
                            type = "read"
                            source_code = {submittion.sourceCode}
                        />
                    </Cell>
                    <Cell>
                        <HeaderPage>
                            Kết Quả Chấm
                        </HeaderPage>
                        <div className = "flex flex-col w-full">

                        {submittion.results.length > 0 ? submittion.results.map((item,index) =>  {
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
                </Fragment>
                :
                <Loading1/>
                }
            </Grid>
        </Fragment>
    )
}
export default SubmittionForm;