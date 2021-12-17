import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import Cell from "components/UI/Cell";
import CodeEditor from "components/UI/CodeEditor";
import Grid from "components/UI/Grid";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import submittionApi from "api/submittionApi";
import Loading1 from "components/UI/Loading/Loading1"

import "./SubmittionForm.css"

const SubmittionForm = (props) => {

    const params = useParams();
    const {id} = props;

    const allsubmittion = useSelector(state => state.submittion);
    const [submittion, setSubmittion] = useState(null);

    const [isPendding, setIsPendding] = useState(false);

    useEffect(() => {
        if(submittion == null){
            const idSubmittion = id || params.id
            setSubmittion(allsubmittion.data.find(item => +item.id === +idSubmittion))
        } 
    },[allsubmittion, id, params.id, submittion])

    useEffect(() => {
        let timer ;
        if(isPendding){
            timer = setInterval(() => {
                submittionApi.getOne(id)
                .then( res => {
                    setIsPendding(false)
                    setSubmittion(res.results);
                })
                .catch( errors => {
                    console.log("ERROR", errors)
                })
            },10000)
        }

        return (
            clearInterval(timer)
        )
    },[id, isPendding])

    return (
        <Fragment>
            <Grid >
                {submittion ? 
                <Fragment>
                    <Cell>
                        <div className = "flex flex-row flex-end infor">
                            <span><b>ID : </b>{id}</span>
                            <span><b>Người Code :</b> {submittion.user.username}</span>
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
                            if(item.status.description === "Pendding"){
                                setIsPendding(true)
                            }
                            return <div key = {index} className = {`btn ${item.status.description === "Wrong Answer" ? "btn-danger-soft" : "btn-success-soft" } w-full mr-1 mb-2 block`}>
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
                                            <div style = {{whiteSpace : "pre", textAlign : "left"}}> <b>Kết Quả : </b>{`${item.status.description === 'Wrong Answer' ? "Sai" : "Đúng"}`} </div>
                                        </Cell>
                                    </Grid>
                                </div>
                        })
                        :
                            <div className="w-32 mx-auto">CHƯA CÓ KẾT QUẢ</div>    
                        }
                        </div>
                    </Cell>
                    {isPendding && 
                        <Cell>
                           <div className="w-10 mx-auto"> <Loading1/></div>
                        </Cell>
                    }
                </Fragment>
                :
                <Loading1/>
                }
            </Grid>
        </Fragment>
    )
}
export default SubmittionForm;