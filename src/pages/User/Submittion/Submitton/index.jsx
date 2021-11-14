import { Fragment } from "react";
import { useParams } from "react-router";
import SubmittionForm from "../SubmittionForm";


const Submittion = (props) => {

    const params = useParams();

    return (
        <Fragment>
            <SubmittionForm 
                id = {params.id}
            />
        </Fragment>
    )
}
export default Submittion;