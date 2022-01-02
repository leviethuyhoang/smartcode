import ShowProblem from "pages/User/Submit/ShowProblem";
import { Fragment} from "react";


const SubmitProblemContest = (props) => {

    const { listProblems, onSubmit } = props; 

    return (
        <Fragment>
            <ShowProblem
                listProblems = {listProblems}
                handleSubmit = {onSubmit}
            />
        </Fragment>
    )
}
export default SubmitProblemContest;