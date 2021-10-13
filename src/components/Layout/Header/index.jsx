import { Fragment } from 'react';
// import Breadcrumb from './Breadcrumb/Breadcrumb.js';
import Search from './Search/Search.js';
import IconNotifications from './Notifications/IconNotifications.js';
import NotificationsWrap from './Notifications/NotificationsWrap.js';
import ListNotificationsWrap from './Notifications/ListNotificationsWrap.js';
import ListNotifications from './Notifications/ListNotifications.js';
import HeaderNav from 'components/Layout/AdminLayout/Header/HeaderNav/index.jsx';
import Logo from 'components/Layout/Logo/index.jsx';
import Authenticate from './Authenticate/index.jsx';
import AccountMenu from '../AccountMenu/index.jsx';
import { useSelector } from 'react-redux';
const Header = (props) => {
  const auth = useSelector(state => state.auth);
  return (
    <Fragment>
      <div className="top-bar-boxed border-b border-theme-2 -mt-7 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-3">
        <div className="h-full flex items-center">
          <Logo/>
          <HeaderNav/>
          {!auth.isLoggedIn && <Authenticate/>}
          {auth.isLoggedIn && 
          <Fragment>
            <Search />
            <NotificationsWrap>
              <IconNotifications />
              <ListNotificationsWrap>
                <ListNotifications />
              </ListNotificationsWrap>
            </NotificationsWrap>
            <AccountMenu/>
          </Fragment>
          }
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
