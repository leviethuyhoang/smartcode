import ShowProblem from "components/Page/User/SubmitProblemForm/ShowProblem";
import SubmitForm from "components/Page/User/SubmitProblemForm/SubmitForm";
import SplitView from "components/UI/SplitView";
import { Fragment, useCallback, useState} from "react";
import AllSubmissionContest from "../AllSubmissionContest";


const SubmitProblemContest = (props) => {

    const { listProblems, onSubmit, idProblem, idContest} = props; 

    const [problem, setProblem] = useState(null);
    
    const handleChangeProblem = useCallback((id) => {
        setProblem(listProblems.find(item => item.id === +id))
    },[listProblems])

    return (
        <Fragment>
            <SplitView>
                <Fragment>
                    <ShowProblem
                        problem = {problem}
                    />
                    <AllSubmissionContest
                        id = {idContest}
                        idProblem = {problem?.id}
                    />
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