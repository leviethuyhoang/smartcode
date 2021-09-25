import { Fragment } from "react";


const Container = (props) => {
    return (
        <Fragment>
            <div className="wrapper">
                <div className="wrapper-box">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}
export default Container;