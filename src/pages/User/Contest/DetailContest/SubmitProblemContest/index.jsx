import ShowProblem from "components/Page/User/SubmitProblemForm/ShowProblem";
import SubmitForm from "components/Page/User/SubmitProblemForm/SubmitForm";
import Card from "components/UI/Card";
import SplitView from "components/UI/SplitView";
import { useEffect } from "react";
import { Fragment, useCallback, useState} from "react";
import AllSubmissionContest from "../AllSubmissionContest";


const SubmitProblemContest = (props) => {

    const { listProblems, onSubmit, idProblem, idContest} = props; 

    const [problem, setProblem] = useState(null);
    
    const handleChangeProblem = useCallback((id) => {
        setProblem(listProblems.find(item => item.id === +id))
    },[listProblems])

    useEffect(() => {
        if(!!idProblem){
            handleChangeProblem(idProblem)
        }
    },[handleChangeProblem, idProblem])

    return (
        <Fragment>
            <SplitView>
                <Fragment>
                    <ShowProblem
                        problem = {problem}
                        />
                    <Card>
                        <AllSubmissionContest
                            id = {idContest}
                            idProblem = {problem?.id}
                        />
                    </Card>
                </Fragment>
                <SubmitForm
                    listProblems = {listProblems}
                    handleSubmit = {onSubmit}
                    handleChangeProblem = {handleChangeProblem}
                    idProblem = {idProblem}
                />
            </SplitView>
        </Fragment>
    )
}
export default SubmitProblemContest;