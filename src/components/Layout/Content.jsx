import { Fragment } from "react";


const Content = (props) => {
    return (
        <Fragment>
            <div className="content">
                    {props.children}
            </div>
        </Fragment>
    )
}
export default Content;