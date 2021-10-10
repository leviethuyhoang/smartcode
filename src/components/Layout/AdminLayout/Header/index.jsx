import { Fragment } from 'react';
import Search from './Search';
import IconNotifications from './Notifications/IconNotifications.js';
import NotificationsWrap from './Notifications/NotificationsWrap.js';
import ListNotificationsWrap from './Notifications/ListNotificationsWrap.js';
import ListNotifications from './Notifications/ListNotifications.js';
import MenuWrap from './AccountMenu/MenuWrap.js';
import DropDownMenu from './AccountMenu/DropDownMenu.js';
import Logo from "../../Logo";
import HeaderNav from './HeaderNav';

const Header = (props) => {
  return (
    <Fragment>
      <div className="top-bar-boxed border-b border-theme-2 -mt-7 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-3">
        <div className="h-full flex items-center">
          <Logo />
          {/* <Breadcrumb /> */}
          <HeaderNav/>
          <Search />
          <NotificationsWrap>
            <IconNotifications />
            <ListNotificationsWrap>
              <ListNotifications />
            </ListNotificationsWrap>
          </NotificationsWrap>
          <MenuWrap>
            <DropDownMenu/>
          </MenuWrap>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
