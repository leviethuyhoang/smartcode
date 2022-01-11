import contestApi from "api/contestApi";
import Button from "components/UI/Button/Button";
import Cell from "components/UI/Cell";
import Search from "components/UI/Feild/Search";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import Table from "components/UI/Table/Table";
import Wrap from "components/UI/Wrap";
import { useCallback } from "react";
import { Fragment, useEffect, useState } from "react";
import SubmmittionItem from "./SubmittionItem";


const AllSubmissionContest = (props) => {


    const {id} = props;
    const [data, seData] = useState([]);
    const [listSubmission, setListSubmission] = useState(null)

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
                                {
                                    title : "Tải"
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