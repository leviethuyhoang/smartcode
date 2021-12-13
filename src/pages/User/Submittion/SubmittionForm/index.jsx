import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Cell from "components/UI/Cell";
import CodeEditor from "components/UI/CodeEditor";
import Grid from "components/UI/Grid";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import { Loading } from "assets/icons/Loading";
import { submittionActions } from "app/slice/submittionSlice";
import useHttp from "hooks/useHttp";
import submitionApi from "api/submittionApi";

import "./SubmittionForm.css"

const SubmittionForm = (props) => {

    const params = useParams();
    const {id} = props;

    const dispatch = useDispatch();
    const {sendRequest} = useHttp();
    const allsubmittion = useSelector(state => state.submittion);
    const [submittion, setSubmittion] = useState(null);

    const configData = useCallback((res) => {
        dispatch(submittionActions.getAll(Object.values(res)));
     },[dispatch])
 
     const fetchData = useCallback(() => {
         sendRequest(submitionApi.getMany,configData)
     },[configData, sendRequest])

    useEffect(() => {
        if(allsubmittion.data !== null){
                const idSubmittion = id || params.id
                setSubmittion(allsubmittion.data.find(item => +item.id === +idSubmittion))
        } else {
            fetchData();
        }
    },[allsubmittion, fetchData, id, params.id])

    return (
        <Fragment>
            <Grid >
                {submittion ? 
                <Fragment>
                    <Cell>
                        <div className = "flex flex-row flex-end infor">
                            <span><b>ID : </b>{id}</span>
                            <span><b>Người Code :</b> {submittion.user}</span>
                            <span><b>Ngày Nộp : </b>{submittion.time}</span>
                            <span><b>Tên Bài Tập :</b> {submittion.problem}</span>
                            <span><b>Ngôn Ngữ :</b> {submittion.language}</span>
                            <span><b>Thời Gian Chạy :</b> {submittion.timeRun}ms</span>
                            <span><b>Bộ Nhớ : </b>{submittion.memory}kb</span>
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

                        {submittion.submittions.map((item,index) =>  {
                            return <div key = {index} className = {`btn ${item.result ? "btn-success-soft" : "btn-danger-soft"} w-full mr-1 mb-2 block`}>
                                    <Grid>
                                        {index+1}
                                        <Cell width = {3}> 
                                            <div style = {{whiteSpace : "pre" , textAlign : "left"}}> <b>Input :</b> {item.input} </div>
                                        </Cell>
                                        <Cell width = {3}> 
                                            <div style = {{whiteSpace : "pre", textAlign : "left"}}> <b>Output :</b> {item.output} </div>
                                        </Cell>
                                        <Cell width = {3}> 
                                            <div style = {{whiteSpace : "pre", textAlign : "left"}}> <b>Đáp Án :</b> {item.answer} </div>
                                        </Cell>
                                        <Cell width = {2}> 
                                            <div style = {{whiteSpace : "pre", textAlign : "left"}}> <b>Kết Quả : </b>{`${item.result ? "Đúng" : "Sai"}`} </div>
                                        </Cell>
                                    </Grid>
                                </div>
                        })}
                        </div>
                    </Cell>
                </Fragment>
                :
                <div>Loading... <Loading/></div>
                }
            </Grid>
        </Fragment>
    )
}
export default SubmittionForm;