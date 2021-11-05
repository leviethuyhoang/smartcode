import { Fragment } from "react";
import ReactDOM  from "react-dom";

import "./Modal.scss"

const Modal = (props) => {

    console.log("con",props.children)
    const onClose = () => {
        props.onClose();
    }

    const Overlay = () => {
        return <div className="overlay" onClick = {onClose}/>
    }

    const Content = () => {
        return (
            <div className = "my-modal relative">
                    {props.children}
            </div>
        )
    }

    const portalElement = document.getElementById("overlay-modal")

    return (
        <Fragment>
            {ReactDOM.createPortal(<Overlay/>,portalElement)}
            {ReactDOM.createPortal(<Content/>,document.getElementById("modal"))}
        </Fragment>
    )
}
export default Modal;