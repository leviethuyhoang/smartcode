import { Fragment } from "react";


const Content = (props) => {
    return (
        <Fragment>
            <div className="content">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 xxl:col-span-9">
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Content;