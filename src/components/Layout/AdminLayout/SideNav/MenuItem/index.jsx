import { NavLink } from "react-router-dom";


const MenuItem = (props) => {

    return (
        <li>
            <NavLink exact to = {props.url} activeClassName = "side-menu--active" className="side-menu">
                <div className="side-menu__icon">
                    {props.icon}
                </div>
                <div className="side-menu__title">{props.title}</div>
            </NavLink>
        </li>
    )
}
export default MenuItem;