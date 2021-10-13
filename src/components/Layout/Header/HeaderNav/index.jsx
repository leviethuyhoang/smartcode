import { Fragment } from "react";
import Item from "./HeaderNavItem";


const HeaderNav = (props) => {
    return (
        <Fragment>
            <nav className="top-nav mx-auto">
                <ul>
                    <Item title = "Bài Tập" url = "/assignment"/>
                    <Item title = "Làm Bài" url = "/submittion/submit"/>
                    <Item title = "Bảng Kết Quả" url = "/submittion"/>
                </ul>
            </nav>
        </Fragment>
    )
}
export default HeaderNav;