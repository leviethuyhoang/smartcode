import { Fragment, useState } from "react";
import ShowProblem from "./ShowProblem";
import SplitView from "components/UI/SplitView";
import SubmitForm from "./SubmitForm";
import { useCallback } from "react";
import { useEffect } from "react";

const SubmitProblemForm = (props) => {

    const { listProblems, handleSubmit, idProblem } = props;
    const [problem, setProblem] = useState(null);
    
    const handleChangeProblem = useCallback((id) => {
        setProblem(listProblems.find(item => item.id === +id))
    },[listProblems])

    useEffect(() => {
        if(!!idProblem){
            handleChangeProblem(idProblem);
        }
    },[handleChangeProblem, idProblem])

    return (
        <Fragment>
            <SplitView>
                <ShowProblem
                    problem = {problem}
                />
                <SubmitForm
                    listProblems = {listProblems}
                    handleSubmit = {handleSubmit}
                    handleChangeProblem = {handleChangeProblem}
                    idProblem = {idProblem}
                />
            </SplitView>
        </Fragment>
    )
}
export default SubmitProblemForm;