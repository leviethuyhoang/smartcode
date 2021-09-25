import { Fragment } from "react";
import { useRouteMatch } from "react-router";
import MenuSub from "./MenuSub";


const MenuGroup = (props) => {
    const url = props.url;
    const match = useRouteMatch();
    const matchUrl = match.url.includes(url);
    return (
        <Fragment>
            <li>
                <div className={matchUrl?"side-menu side-menu--active":"side-menu"}>
                    <div className="side-menu__icon"> {props.icon} </div>
                    <div className="side-menu__title">
                        {props.title}
                    <div className="side-menu__sub-icon transform rotate-180"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9">
                        </polyline>
                        </svg>
                    </div>
                    </div>
                </div>
                
                <MenuSub matchUrl = {matchUrl}>
                    {props.children}
                </MenuSub>
            </li>
        </Fragment>
    )
}
export default MenuGroup;