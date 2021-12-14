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
            icon = {IconSideNav.ACCOUNT}
            title = "Tài Khoản"
            url = "/user"
          />
          <MenuItem
            icon = {IconSideNav.ASSIGNMENT}
            title = "Bài Tập"
            url = "/assignment"
          />
          <MenuItem
            icon = {IconSideNav.LESSON}
            title = "Nhóm Bài"
            url = "/lesson"
          />
          <MenuItem
            icon = {IconSideNav.CHILD_ITEM}
            title = "Kỳ Thi"
            url = "/contest"
          />
          <MenuItem
            icon = {IconSideNav.POST}
            title = "Bài Viết"
            url = "/post"
          />
          <MenuItem
            icon = {IconSideNav.SETTING}
            title = "Cài Đặt"
            url = "/setting"
          />
        </ul>
      </nav>
      {/* END: Side Menu */}
      </Fragment>
    )
}
export default React.memo(SideNav);