import { Fragment } from 'react';
import Search from './Search/Search.js';
import Authenticate from './Authenticate';
import AccountMenu from './AccountMenu';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import HeaderNav from './HeaderNav/index.jsx';
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
            <AccountMenu/>
          </Fragment>
          }
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
