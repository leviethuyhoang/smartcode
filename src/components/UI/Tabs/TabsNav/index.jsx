import { Fragment } from "react";


const TabsNav = (props) => {
    return (
        <Fragment>
            <div className={`nav nav-tabs flex-col sm:flex-row justify-start mb-5 ${props.classes ? props.classes : ''}`} role="tablist">
                {props.children}
            </div>
        </Fragment>
    )
}
export default TabsNav;