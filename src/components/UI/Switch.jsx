import { Fragment } from "react";

const Switch = (props) => {
    
    const {
        field,
        lable,
    } = props;

    const { name } = field;

    return (
        <Fragment>
            <div className="mt-3 flex flex-col items-center ">
                {lable && <label>{lable}</label>}
                <div className="mt-2">
                <div className="form-check">
                    <input  {...field} name = {name} id="checkbox-switch-7" className="form-check-switch" type="checkbox" />
                </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Switch;