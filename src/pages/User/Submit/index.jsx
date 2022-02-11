import problemApi from "api/problemApi";
import submitionApi from "api/submittionApi";
import SubmitProblemForm from "components/Page/User/SubmitProblemForm";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Loading1 from "components/UI/Loading/Loading1";
import Toastify from "components/UI/Notification/Toastify";
import { useCallback, useEffect } from "react";
import { useState } from "react";

import { Fragment,  } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import queryString from "query-string";


const Submit = (props) => {

    const history = useHistory();
    const [listProblems, setListProblems ] = useState(null);

    const location = useLocation();
    const { id } = queryString.parse(location.search)

    console.log("ids",id)

    const fetchProblem = useCallback(() => {
        problemApi.getMany()
        .then( res => {
            setListProblems(res.results);
        })
        .catch(error => {
            setListProblems([]);
            console.log("ERROR",error)
        })
    },[]);

    useEffect(() => {
        fetchProblem();
    },[fetchProblem])

    const handleSubmit = (values,{setSubmitting, resetForm}) => {
        submitionApi.submit(values)
        .then( res => {
            console.log("submit",res)
            Toastify("success", "Nộp Bài Thành Công");
            resetForm(true);
            history.push(`/submittion/${res.id}`)
        })
        .catch( error => {
            Toastify("error", "Nộp Bài Thất Bại")
            setSubmitting(false)
        })
    }

    return (
        <Fragment>
            <Grid gap = {2} mt = "5">
                { listProblems ? 
                    <Cell>
                        <SubmitProblemForm
                            idProblem = {id}
                            listProblems = {listProblems}
                            handleSubmit = {handleSubmit}
                        />
                    </Cell>
                :
                   <Cell>
                        <div className="flex justify-center">
                            <Loading1/> 
                        </div>
                   </Cell>   
                }
            </Grid>
        </Fragment>
    )
}
export default Submit;