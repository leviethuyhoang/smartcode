import contestApi from "api/contestApi";
import submitionApi from "api/submittionApi";
import Button from "components/UI/Button/Button";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import Table from "components/UI/Table/Table";
import Wrap from "components/UI/Wrap";
import { useCallback } from "react";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SubmmittionItem from "./SubmittionItem";


const AllSubmissionContest = (props) => {


    const {id,} = props;
    const [data, seData] = useState([]);
    const [listSubmission, setListSubmission] = useState(null)
    const auth = useSelector(state => state.auth)

    const fetchSubmission = useCallback(() => {
        seData([])
        contestApi.getSubmission(id)
        .then(res => {
            console.log("res listSubmittion", res);
            seData(res);
        })
        .catch( error => {
            console.log("error", error)
        })
    },[id])

    useEffect(() => {
        fetchSubmission();
    },[fetchSubmission])

    const filterSearch = useCallback((keySearch) => {
        if(data){
            setListSubmission(data.filter(items => items.problem.title.match(keySearch)))
        }
    },[data])

    return (
        <Fragment>
            <Grid>
                <Cell>
                    <div className="flex flex-row flex-end mb-5">
                        <Wrap>
                            { auth.isAdmin &&
                                <Link  to= {{pathname : `${submitionApi.getPathDownLoadFileExcel(id)}`}} className="btn btn-elevated-rounded-dark mr-auto" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text hidden sm:block w-4 h-4 mr-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg> Export to Excel 
                                </Link>
                            }
                            <Search classes = "ml-auto"
                                filterSearch = {filterSearch}
                            />
                            <Button classes = "btn btn-outline h-10 w-32 ml-5" onClick = {fetchSubmission}>
                                Làm Mới
                            </Button>
                            
                        </Wrap>
                    </div>
                </Cell>
            </Grid>
            { listSubmission ? 
                    <Fragment>
                        <Table
                            listHead = {[
                                {
                                    title : "Coder"
                                },
                                {
                                    title : "Thời Gian"
                                },
                                {
                                    title : "Bài Tập"
                                },
                                {
                                    title : "Ngôn Ngữ"
                                },
                                {
                                    title : "Kết Quả"
                                },
                                {
                                    title : "Xem"
                                },
                            ]}

                            exclude = {[ 
                                !listSubmission[0]?.score && !listSubmission[0]?.totalScore && "Kết Quả" ,
                            ]}
                        >
                            {listSubmission.map((item,key) => {
                                return  <SubmmittionItem
                                    key = {key}
                                    submissionInfor = {item}
                                />
                            })}
                        </Table>
                    </Fragment>
                    :
                    <div className = "flex justify-center">
                        <Loading1/>
                    </div>  
            }
        </Fragment>
    )
}
export default AllSubmissionContest;