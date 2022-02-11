import submitionApi from "api/submittionApi";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Card from "components/UI/Card";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import SubmissionForm from "components/Page/User/Submission/SubmissionForm";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";


const DetailSubmittion = (props) => {
    
    const params = useParams();
    const location = useLocation();
    const { idContest } = queryString.parse(location.search);

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
            <Grid>
                <Cell width ={6}>
                    <HeaderPage>
                        Chi Tiết Bài Nộp
                    </HeaderPage>
                </Cell>
            {
                idContest &&
                <Cell width ={6}>
                    <div className="flex justify-end">
                        <Link to = {`/contest/${idContest}`} className="btn btn-primary ml-auto mt-8 w-32">Quay Lại</Link>
                    </div>
                </Cell>
            }
            </Grid>
            <Card classes = "mt-5">
                <Grid >
                    {submittion ? 
                        <Cell>
                            <SubmissionForm submissionInfor = {submittion}/>
                        </Cell>
                    :
                        <div className="flex flex-row justify-center">
                            <Loading1/>
                        </div>
                    }
                </Grid>
            </Card>
        </Fragment>
    )
}
export default DetailSubmittion;