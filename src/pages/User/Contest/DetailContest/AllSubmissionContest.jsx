import contestApi from "api/contestApi";
import Loading1 from "components/UI/Loading/Loading1";
import Table from "components/UI/Table/Table";
import { useCallback } from "react";
import { Fragment, useEffect, useState } from "react";
import SubmmittionItem from "./SubmittionItem";


const AllSubmissionContest = (props) => {

    const {id} = props;

    const [listSubmission, setListSubmission] = useState(null);

    const fetchSubmission = useCallback(() => {
        contestApi.getSubmission(id)
        .then(res => {
            console.log("res", res);
            setListSubmission(res);
        })
        .catch( error => {
            console.log("error", error)
        })
    },[id])

    useEffect(() => {
        fetchSubmission();
    },[fetchSubmission])
    return (
        <Fragment>
            { listSubmission ? 
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
                    :
                    <div className = "flex justify-center">
                        <Loading1/>
                    </div>  
            }
        </Fragment>
    )
}
export default AllSubmissionContest;