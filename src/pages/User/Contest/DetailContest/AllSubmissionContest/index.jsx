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


    const {id} = props;
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
                                <Link  to= {{pathname : `https://3132-2001-ee0-4b7f-25e0-3917-d16b-79a5-cfaa.ngrok.io/api/v1${submitionApi.getPathDownLoadFileExcel(id)}`}} className="btn btn-elevated-rounded-dark mr-auto" target="_blank">
                                    Tải File Excel  <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-down block mx-auto"><polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path></svg>
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
                        >
                            {listSubmission.map((item,key) => {
                                return  <SubmmittionItem
                                    key = {key}
                                    id = {item.id}
                                    languageId = {item.languageId}
                                    problem = {item.problem}
                                    results = {item.results}
                                    createAt = {item.createAt}
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