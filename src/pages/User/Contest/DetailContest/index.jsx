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
import { Link, useHistory } from "react-router-dom";
import ConvertDate from "util/ConvertDate";
import Wrap from "components/UI/Wrap";
import AllProblemContest from "./AllProblemContest";
import { Loading } from "assets/icons/Loading";
import moment from "moment";

const DetailsContest = (props) => {

    const params = useParams(); 
    const history = useHistory();
    
    const tab = useTab('listProblem');

    const [contestDetail, setContestDetail] = useState(null);
    const [listProblem, setListProblem] = useState([]);
    const [idProblem, setIdProblem ] = useState(null);
    const [isLoading, setIsLoading ] = useState(false);

    const [enableContest, setEnableContest ] = useState(false);

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
            setIsLoading(true);
            contestApi.join({contestId : params.id})
            .then(res => {
                console.log(res)
                setContestDetail(prev =>{
                    return  { ...prev, isJoined : !prev.isJoined }
                })
                Toastify("success","Tham Gia Th??nh C??ng")
            })
            .catch( error => {
                console.log("error",error);
                Toastify('error',"B???n Ph???i ????ng Nh???p ????? Tham Gia K??? Thi")
            })
            .finally( _ => {
                setIsLoading(false);
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
        
        submitionApi.submit({...values , contestId : params.id})
        .then(res => {
            Toastify("success", "N???p B??i Th??nh C??ng");
            resetForm(true);
            history.push(`/submittion/${res.id}?idContest=${contestDetail.id}`);
        })
        .catch( error => {
            console.log("error",error)
            Toastify("error", "???? X???y Ra L???i");
        })
        .finally( _=> {
            setSubmitting(false);
        })
    }

    useEffect(() => {
        if(contestDetail){
            const now = new Date().getTime();
            const startTime = moment(contestDetail.startTime).subtract(7,'hours').toDate().getTime();
            const timeLine = now - startTime;

            if( timeLine < 0 ){
                var timer = setTimeout(() => {
                    setEnableContest(true);
                },Math.abs(timeLine));
            } else {
                setEnableContest(true);
            }
        }
        return (() =>{
            clearTimeout(timer)
        })
    },[contestDetail])

    return (
        <Fragment>
            
            <Grid>
                <Cell width = "6">
                    <HeaderPage>
                        CHI TI???T K??? THI
                    </HeaderPage>
                </Cell>
                <Cell width = "6">
                    <Wrap>
                        <Link to = "/contest" className = "btn btn-primary ml-auto mt-5">
                            T???T C??? K??? THI
                        </Link>
                    </Wrap>
                </Cell>
                <Cell>
                    <Card classes = "mt-5 min-h-90" >
                        {/* Thong Tin Co Ban */}

                        {contestDetail ?
                            <Fragment>
                                <div className="flex flex-col items-center w-full border-b border-gray-200 dark:border-dark-5 pb-5">
                                    <h1 className="font-medium">{contestDetail.title}</h1>
                                    <p className="mt-5 text-center w-full">{contestDetail.description}</p>
                                    <div className="flex flex-row justify-center mt-5">
                                        <span className="mr-5">
                                            <b>Th???i Gian B???t ?????u : </b> {ConvertDate.getDateNomal(contestDetail.startTime)}
                                        </span>
                                        <span>
                                            <b>Th???i Gian K???t Th??c : </b> {ConvertDate.getDateNomal(contestDetail.endTime)}
                                        </span>
                                    </div>
                                    <Button
                                        onClick = {handleJoinContest}
                                        classes = {`${contestDetail.isJoined ? "btn-dark":"btn-primary"} mt-5 w-40`}
                                        disabled = {contestDetail.isJoined || isLoading}
                                    >
                                        {
                                            isLoading ? <Loading/> :
                                            contestDetail.isJoined ? "???? Tham Gia ":"Tham Gia"
                                        }
                                    </Button>
                                </div>

                                { contestDetail.isJoined &&
                                    <Tabs>
                                    <TabsNav>
                                        <TabItem name = "listProblem" {...tab}>
                                            ????? B??i
                                        </TabItem>
                                        <TabItem name = "submit" {...tab}>
                                            N???p B??i
                                        </TabItem>
                                        {/* <TabItem name = "allSubmission" {...tab}>
                                            T???t C??? B??i L??m
                                        </TabItem> */}
                                    </TabsNav>
                                    <TabContent>
                                        <TabPane name = "listProblem" {...tab}>
                                        {enableContest ?
                                            <Grid>
                                                 <AllProblemContest
                                                    listProblem = {listProblem}
                                                    onShowDetaiProblem = {onShowDetaiProblem}
                                                    resolveProblem = {resolveProblem}
                                                />
                                            </Grid>
                                            :
                                            <div className="flex w-full justify-center text-lg font-medium">
                                                <p>Ch??a ?????n Gi??? L??m B??i</p>
                                            </div>
                                        }
                                        </TabPane>
                                        <TabPane name = "submit" {...tab}>
                                        {enableContest ?
                                                <SubmitProblemContest
                                                    listProblems = {listProblem}
                                                    onSubmit = {handleSubmitProblem}
                                                    idProblem = {idProblem}
                                                    idContest = {contestDetail.id}
                                                />
                                            :
                                                <div className="flex w-full justify-center">
                                                    <p>Ch??a ?????n Gi??? L??m B??i</p>
                                                </div>
                                            }
                                        </TabPane>
                                        {/* <TabPane name = "allSubmission" {...tab}>
                                            <AllSubmissionContest
                                                id = {params.id}
                                            />
                                        </TabPane> */}
                                    </TabContent>
                                </Tabs>
                                }
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