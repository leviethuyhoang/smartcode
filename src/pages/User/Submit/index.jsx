import problemApi from "api/problemApi";
import submitionApi from "api/submittionApi";
import { Loading } from "assets/icons/Loading";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import SubmitProblemForm from "components/Page/User/SubmitProblemForm";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Toastify from "components/UI/Notification/Toastify";
import { useCallback, useEffect } from "react";
import { useState } from "react";

import { Fragment,  } from "react";
import { useHistory } from "react-router-dom";


const Submit = (props) => {

    const history = useHistory();
    const [listProblems, setListProblems ] = useState(null);

    const fetchProblem = useCallback(() => {
        problemApi.getMany()
        .then( res => {
            console.log("all problem",res)
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
            <HeaderPage>
                Bài tập / Làm bài
            </HeaderPage>
            <Grid gap = {2} mt = "5">
                { listProblems ? 
                    <Cell>
                        <SubmitProblemForm
                            listProblems = {listProblems}
                            handleSubmit = {handleSubmit}
                        />
                    </Cell>
                :
                 <Loading/>    
                }
            </Grid>
        </Fragment>
    )
}
export default Submit;