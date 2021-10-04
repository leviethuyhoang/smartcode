import { Fragment } from 'react';
import Breadcrumb from './Breadcrumb/Breadcrumb.js';
import Logo from './Logo/Logo.js';
import Search from './Search/Search.js';
import IconNotifications from './Notifications/IconNotifications.js';
import NotificationsWrap from './Notifications/NotificationsWrap.js';
import ListNotificationsWrap from './Notifications/ListNotificationsWrap.js';
import ListNotifications from './Notifications/ListNotifications.js';
import MenuWrap from './AccountMenu/MenuWrap.js';
import DropDownMenu from './AccountMenu/DropDownMenu.js';
const Header = (props) => {
  return (
    <Fragment>
      <div className="top-bar-boxed border-b border-theme-2 -mt-7 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-12">
        <div className="h-full flex items-center">
          {/* BEGIN: Logo */}
          <Logo />
          {/* END: Logo */}
          {/* BEGIN: Breadcrumb */}
          <Breadcrumb />
          {/* END: Breadcrumb */}
          {/* BEGIN: Search */}
          <Search />
          {/* END: Search */}
          {/* BEGIN: Notifications */}
          <NotificationsWrap>
            <IconNotifications />
            <ListNotificationsWrap>
              <ListNotifications />
            </ListNotificationsWrap>
          </NotificationsWrap>
          {/* END: Notifications */}
          {/* BEGIN: Account Menu */}
          <MenuWrap>
            <DropDownMenu/>
          </MenuWrap>
          {/* END: Account Menu */}
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
