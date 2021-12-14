import { Fragment } from "react";

const Switch = (props) => {
    
    const {
        field,
        label,
    } = props;

    return (
        <Fragment>
            <div className="mt-3 flex flex-col items-center text-center ">
                {label && <label>{label}</label>}
                <div className="mt-2">
                <div className="form-check justify-center">
                    <input  {...field} id="checkbox-switch-7" className="form-check-switch" type="checkbox" checked = {field.value}/>
                </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Switch;