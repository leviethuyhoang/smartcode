import { Fragment } from "react";
import IconSideNav from "views/icons/iconSideNav";
import MenuGroup from "./MenuGroup";
import MenuItem from "./MenuItem";

const SideNav = (props) => {
    return (
      <Fragment>
      {/* BEGIN: Side Menu */}
      <nav className="side-nav">
        <ul>
          <MenuGroup
            icon = {IconSideNav.DASHBOARD}
            title = "Dash Board"
            url = "/"
          >
            <MenuGroup
              icon = {IconSideNav.DASHBOARD}
              title = "Dash Board"
              url = "/admin"
            >
              <MenuItem
                icon = {IconSideNav.CHILD_ITEM}
                title = "Item 2"
                url = "/assign/"
              />
              <MenuItem
                icon = {IconSideNav.CHILD_ITEM}
                title = "Item 3"
                url = "/admin/asign/1"
              />
            </MenuGroup>
            <MenuItem
              icon = {IconSideNav.CHILD_ITEM}
              title = "Login"
              url = "/login"
            />
            <MenuItem
              icon = {IconSideNav.CHILD_ITEM}
              title = "Register"
              url = "/register"
            />
          </MenuGroup>


        </ul>
      </nav>
      {/* END: Side Menu */}
      </Fragment>
    )
}
export default SideNav;