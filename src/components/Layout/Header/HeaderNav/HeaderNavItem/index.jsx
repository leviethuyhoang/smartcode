import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss"

const NavItem = (props) => {

    return (
        <Fragment>
             <li >
                <NavLink exact to = {props.url} className="top-menu " activeClassName = "top-menu--active">
                    <div className="top-menu__title title">{props.title}</div>
                </NavLink>
             </li>
        </Fragment>
    )
}
export default NavItem;