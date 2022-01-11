import problemApi from "api/problemApi";
import submitionApi from "api/submittionApi";
import { problemActions } from "app/slice/problemSlice";
import { Loading } from "assets/icons/Loading";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import Toastify from "components/UI/Notification/Toastify";
import { useCallback, useEffect } from "react";
import { useState } from "react";

import { Fragment,  } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ShowProblem from "./ShowProblem";


const Submit = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const problems = useSelector(state => state.problem);
    const [listProblems, setListProblems ] = useState(null);

    const fetchProblem = useCallback(() => {
        problemApi.getMany()
        .then( res => {
            dispatch(problemActions.getMany(res.results));
        })
        .catch(error => {
            dispatch(problemActions.getMany([]));
            console.log("ERROR",error)
        })
    },[dispatch]);

    useEffect(() => {

        if(problems.data === null){
            fetchProblem();
        } else {
            setListProblems(problems.data)
        }
    },[fetchProblem, problems.data])

    const handleSubmit = (values,{setSubmitting, resetForm}) => {
        submitionApi.submit(values)
        .then( res => {
            console.log("submit",res)
            Toastify("success", "Nộp Bài Thành Công");
            resetForm(true);
            history.push("/submittion")
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
                        <ShowProblem
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