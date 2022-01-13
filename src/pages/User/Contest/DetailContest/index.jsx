import contestApi from "api/contestApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Button from "components/UI/Button/Button";
import Card from "components/UI/Card";
import Toastify from "components/UI/Notification/Toastify";
import Tabs from "components/UI/Tabs";
import TabContent from "components/UI/Tabs/TabContent";
import TabPane from "components/UI/Tabs/TabContent/TabPane";
import TabsNav from "components/UI/Tabs/TabsNav";
import TabItem from "components/UI/Tabs/TabsNav/TabItem";
import useTab from "hooks/useTab";
import SubmitProblemContest from "./SubmitProblemContest";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Grid from "components/UI/Grid";
import Cell from "components/UI/Cell";
import Loading1 from "components/UI/Loading/Loading1";
import submitionApi from "api/submittionApi";
import AllSubmissionContest from "./AllSubmissionContest";
import { Link, useHistory } from "react-router-dom";
import ConvertDate from "util/ConvertDate";
import Wrap from "components/UI/Wrap";
import AllProblemContest from "./AllProblemContest";

const DetailsContest = (props) => {

    const params = useParams(); 
    const history = useHistory();
    
    const tab = useTab('listProblem');

    const [contestDetail, setContestDetail] = useState(null);
    const [listProblem, setListProblem] = useState([]);
    const [idProblem, setIdProblem ] = useState(null);

    console.log("contest Detail",contestDetail);

    const fetchContest = useCallback(() => {
        contestApi.getOne(params.id)
        .then( res => {
            setContestDetail(res);
            console.log("contest one",res)
        })
        .catch( error => {
            console.log(error)
        })
    },[params.id])

    useEffect(() => {
        if(contestDetail == null){
            fetchContest();
        } else {
            setListProblem(contestDetail.problemIds);
        }
    },[contestDetail, fetchContest])

    const handleJoinContest = () => {
        if(!contestDetail.isJoined) {
            contestApi.join({contestId : params.id})
            .then(res => {
                console.log(res)
                setContestDetail(prev =>{
                    return  { ...prev, isJoined : !prev.isJoined }
                })
                Toastify("success","Tham Gia Thành Công")
            })
            .catch( error => {
                console.log("error",error);
                Toastify('error',"Bạn Phải Đăng Nhập Để Tham Gia Kỳ Thi")
            })
        } else {

        }
    }

    const onShowDetaiProblem = (id) => {
        history.push(`/assignment/${id}`);
    }

    const resolveProblem = (id) => {
        tab.toggleTab("submit");
        setIdProblem(id);
    }
    
    const handleSubmitProblem = (values,{setSubmitting,resetForm}) => {
        console.log("submit contest problems", values);
        
        submitionApi.submit({...values , contestId : params.id})
        .then(res => {
            Toastify("success", "Nộp Bài Thành Công");
            resetForm(true);
            history.push(`/submittion/${res.id}`);
        })
        .catch( error => {
            console.log("error",error)
            Toastify("error", "Đã Xảy Ra Lỗi");
        })
        .finally( _=> {
            setSubmitting(false);
        })
    }

    return (
        <Fragment>
            
            <Grid>
                <Cell width = "6">
                    <HeaderPage>
                        CHI TIẾT KỲ THI
                    </HeaderPage>
                </Cell>
                <Cell width = "6">
                    <Wrap>
                        <Link to = "/contest" className = "btn btn-primary ml-auto mt-5">
                            TẤT CẢ KỲ THI
                        </Link>
                    </Wrap>
                </Cell>
                <Cell>
                    <Card classes = "mt-5" >
                        {/* Thong Tin Co Ban */}

                        {contestDetail ?
                            <Fragment>
                                <div className="flex flex-col items-center w-full border-b border-gray-200 dark:border-dark-5 pb-5">
                                    <h1 className="font-medium">{contestDetail.title}</h1>
                                    <p className="mt-5 text-center w-full">{contestDetail.description}</p>
                                    <div className="flex flex-row justify-center mt-5">
                                        <span className="mr-5">
                                            <b>Thời Gian Bắt Đầu : </b> {ConvertDate.getDateNomal(contestDetail.startTime)}
                                        </span>
                                        <span>
                                            <b>Thời Gian Kết Thúc : </b> {ConvertDate.getDateNomal(contestDetail.endTime)}
                                        </span>
                                    </div>
                                    <Button
                                        onClick = {handleJoinContest}
                                        classes = {`${contestDetail.isJoined ? "btn-dark":"btn-primary"} mt-5 w-40`}
                                        disabled = {contestDetail.isJoined}
                                    >
                                    {contestDetail.isJoined ? "Đã Tham Gia ":"Tham Gia"}
                                    </Button>
                                </div>

                                <Tabs>
                                    <TabsNav>
                                        <TabItem name = "listProblem" {...tab}>
                                            Đề Bài
                                        </TabItem>
                                        <TabItem name = "submit" {...tab}>
                                            Nộp Bài
                                        </TabItem>
                                        <TabItem name = "allSubmission" {...tab}>
                                            Tất Cả Bài Làm
                                        </TabItem>
                                    </TabsNav>
                                    <TabContent>
                                        <TabPane name = "listProblem" {...tab}>
                                            <Grid>
                                                <AllProblemContest
                                                    listProblem = {listProblem}
                                                    onShowDetaiProblem = {onShowDetaiProblem}
                                                    resolveProblem = {resolveProblem}
                                                />
                                            </Grid>
                                        </TabPane>
                                        <TabPane name = "submit" {...tab}>
                                            <SubmitProblemContest
                                                listProblems = {listProblem}
                                                onSubmit = {handleSubmitProblem}
                                                idProblem = {idProblem}
                                            />
                                        </TabPane>
                                        <TabPane name = "allSubmission" {...tab}>
                                            <AllSubmissionContest
                                                id = {params.id}
                                            />
                                        </TabPane>
                                    </TabContent>
                                </Tabs>
                            </Fragment>
                        :
                            <div className="flex justify-center w-full">
                                <Loading1/>
                            </div>
                        }

                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}
export default DetailsContest;