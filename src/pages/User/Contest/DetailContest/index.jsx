import contestApi from "api/contestApi";
import { GetProblem } from "app/slice/problemSlice";
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
import SubmitProblemContest from "./SubmitProblemConTest";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "hooks/useHttp";
import AsignmentItem from "pages/User/Assignment/AllAsignment/AsignmentItem";
import Grid from "components/UI/Grid";
import Cell from "components/UI/Cell";
import Loading1 from "components/UI/Loading/Loading1";
import submitionApi from "api/submittionApi";
import AllSubmissionContest from "./AllSubmissionContest";

// const DUMMY_DATA = {
//     title: "Kỳ Thi 1",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae praesentium delectus optio exercitationem veritatis cupiditate odit placeat dolores alias. Esse at reiciendis qui quidem nihil consectetur odio inventore doloremque dignissimos.",
//     password: 123123123,
//     startTime: "21/12/2021",
//     endTime: "21/12/2021",
//     problemIds: [3, 4],
//     isJoined : false,
// }

// const list = [
//     {
//         id : 1,
//         title : "Bai 1"
//     },
//     {
//         id : 2,
//         title : "Bai 2"
//     },
//     {
//         id : 3,
//         title : "Bai 3"
//     },
//     {
//         id : 4,
//         title : "Bai 4"
//     },
// ]

const DetailsContest = (props) => {

    const params = useParams(); 
    const dispatch = useDispatch();
    const problems = useSelector(state => state.problem);
    
    const {SendRequest } = useHttp();
    const tab = useTab('listProblem');

    const [contestDetail, setContestDetail] = useState(null);
    const [listProblem, setListProblem] = useState([]);

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

    const fetchProblem = useCallback(() => {
        dispatch(GetProblem(SendRequest));
    },[SendRequest, dispatch]);

    useEffect(()=>{
        if(problems.data === null){
            fetchProblem();
        } else if(contestDetail){
            const listProblemId = contestDetail.problemIds.map( item => item.id);
            setListProblem(problems.data.filter(item => listProblemId.includes(item.id)));
        } 
        if(!contestDetail) {
            fetchContest();
        }
    },[contestDetail, fetchContest, fetchProblem, problems.data])
    
    const handleSubmit = (values,{setSubmitting,resetForm}) => {
        console.log("submit contest problems", values);
        
        submitionApi.submit({...values , contestId : params.id})
        .then(res => {
            Toastify("success", "Nộp Bài Thành Công");
            resetForm(true);
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
            <div className="flex flex-row">
                <HeaderPage>
                    Chi Tiết Kỳ Thi
                </HeaderPage>

            </div>
            <Card
                classes = "mt-5"
            >
                {/* Thong Tin Co Ban */}

                {contestDetail ?
                    <Fragment>
                        <div className="flex flex-col items-center w-full border-b border-gray-200 dark:border-dark-5 pb-5">
                            <h1>{contestDetail.title}</h1>
                            <p className="mt-5 text-center">{contestDetail.description}</p>
                            <div className="flex flex-row justify-center mt-5">
                                <span className="mr-5">
                                    <b>Thời Gian Bắt Đầu : </b> {contestDetail.startTime}
                                </span>
                                <span>
                                    <b>Thời Gian Kết Thúc : </b> {contestDetail.endTime}
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
                                        {listProblem && listProblem.length > 0 &&
                                            listProblem.map((item, key) => {
                                                return <Cell width = {4} key = {key} >
                                                    <AsignmentItem
                                                        id = {item.id}
                                                        title = {item.title}
                                                        description = {item.description}
                                                    />
                                                </Cell>
                                            })
                                        }
                                    </Grid>
                                </TabPane>
                                <TabPane name = "submit" {...tab}>
                                    <SubmitProblemContest
                                        listProblems = {listProblem}
                                        onSubmit = {handleSubmit}
                                    />
                                </TabPane>
                                <TabPane
                                    name = "allSubmission" {...tab}
                                >
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
        </Fragment>
    )
}
export default DetailsContest;