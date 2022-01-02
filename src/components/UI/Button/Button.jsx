import { Fragment } from "react";


const Button = (props) => {
    const {classes, onClick,type, disabled } = props;
    return (
        <Fragment>
            <button 
                className={`btn ${classes?classes:"btn-primary"}`}
                onClick = {onClick}
                type = {type ? type : 'button'}
                disabled = {disabled === true ? true : false }
            >
                {props.children}
            </button>
            
        </Fragment>
    )
}
export default Button;