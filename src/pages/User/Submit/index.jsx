import problemApi from "api/problemApi";
import { problemActions } from "app/slice/problemSlice";
import { Loading } from "assets/icons/Loading";
import HeaderPage from "components/Page/Admin/Page/HeaderPage";
import Cell from "components/UI/Cell";
import Grid from "components/UI/Grid";
import { useCallback, useEffect } from "react";
import { useState } from "react";

import { Fragment,  } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ShowProblem from "./ShowProblem";


const Submit = (props) => {

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

    const handleSubmit = () => {

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