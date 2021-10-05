import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";
import React from "react";


const MenuItem = (props) => {

    const match = useRouteMatch();
    return (
        <li>
            <NavLink to = {`${match.url}${props.url}`} activeClassName = "side-menu--active" className="side-menu">
                <div className="side-menu__icon">
                    {props.icon}
                </div>
                <div className="side-menu__title">{props.title}</div>
            </NavLink>
        </li>
    )
}
export default MenuItem;