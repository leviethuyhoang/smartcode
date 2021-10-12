import React, { Fragment } from "react";
import IconSideNav from "assets/icons/iconSideNav";
import MenuItem from "./MenuItem";

const SideNav = (props) => {
    return (
      <Fragment>
      {/* BEGIN: Side Menu */}
      <nav className="side-nav">
        <ul>
          <MenuItem
            icon = {IconSideNav.CHILD_ITEM}
            title = "Quản Lý Tài Khoản"
            url = "/user"
          />
          <MenuItem
            icon = {IconSideNav.CHILD_ITEM}
            title = "Quản Lý Bài Tập"
            url = "/assignment"
          />
        </ul>
      </nav>
      {/* END: Side Menu */}
      </Fragment>
    )
}
export default React.memo(SideNav);