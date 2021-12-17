import { Fragment } from "react";
import Item from "./HeaderNavItem";


const HeaderNav = (props) => {
    return (
        <Fragment>
            <nav className="top-nav mx-auto">
                <ul>
                    <Item title = "Bài Tập" url = "/assignment"/>
                    <Item title = "Kỳ Thi" url = "/contest"/>
                    <Item title = "Làm Bài" url = "/submit"/>
                    <Item title = "Bảng Kết Quả" url = "/submittion"/>
                </ul>
            </nav>
        </Fragment>
    )
}
export default HeaderNav;