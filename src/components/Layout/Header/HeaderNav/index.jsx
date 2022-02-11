import { Fragment } from "react";
import Item from "./HeaderNavItem";


const HeaderNav = (props) => {
    return (
        <Fragment>
            <nav className="top-nav mx-auto">
                <ul>
                    <Item title = "Bài Tập" url = "/problem"/>
                    <Item title = "Kỳ Thi" url = "/contest"/>
                    <Item title = "Làm Bài" url = "/submit"/>
                    <Item title = "Bảng Kết Quả" url = "/submission"/>
                </ul>
            </nav>
        </Fragment>
    )
}
export default HeaderNav;