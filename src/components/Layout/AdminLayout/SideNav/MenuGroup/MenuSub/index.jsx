import { Fragment } from "react";


const MenuSub = (props) => {
    return (
        <Fragment>
            <ul style={{display: props.matchUrl ? 'block' : 'none'}}>
                {props.children}
            </ul>
        </Fragment>
    )
}
export default MenuSub;