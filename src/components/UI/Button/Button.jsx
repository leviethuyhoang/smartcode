import { Fragment } from "react";


const Button = (props) => {
    const {classes, onClick,type } = props;
    return (
        <Fragment>
            <button 
                className={`btn ${classes?classes:"btn-primary"}`}
                onClick = {onClick}
                type = {type}
            >
                {props.children}
            </button>
            
        </Fragment>
    )
}
export default Button;