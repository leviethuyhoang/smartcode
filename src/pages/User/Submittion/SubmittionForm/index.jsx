import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";

import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1"
import SubmissionForm from "components/Page/User/Submission/SubmissionForm"

import "./SubmittionForm.css"
import submitionApi from "api/submittionApi";
import { useCallback } from "react";
import Cell from "components/UI/Cell";

const SubmittionForm = (props) => {

    const params = useParams();
    const [submittion, setSubmittion] = useState(null);

    const fetchSubmission = useCallback(() => {
        submitionApi.getOne(params.id)
        .then( res  => {
            console.log(res);
            setSubmittion(res)
        })
        .catch( error => {
            console.log("error", error);
        })
    },[params.id]);

    useEffect(() => {
        if(submittion == null){
            fetchSubmission();
        } 
    },[fetchSubmission, submittion])

    return (
        <Fragment>
            <Grid >
                {submittion ? 
                <Cell>
                    <SubmissionForm submissionInfor = {submittion}/>
                </Cell>
                :
                <div className="flex flex-row items-center">
                    <Loading1/>
                </div>
                }
            </Grid>
        </Fragment>
    )
}
export default SubmittionForm;