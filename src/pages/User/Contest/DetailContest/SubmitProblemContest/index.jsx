import ShowProblem from "pages/User/Submit/ShowProblem";
import { Fragment} from "react";


const SubmitProblemContest = (props) => {

    const { listProblems, onSubmit, idProblem} = props; 

    return (
        <Fragment>
            <ShowProblem
                listProblems = {listProblems}
                handleSubmit = {onSubmit}
                idProblem = {idProblem}
            />
        </Fragment>
    )
}
export default SubmitProblemContest;