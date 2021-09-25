import { Fragment } from "react";

const SideNav = (props) => {
    return (
      <Fragment>
      {/* BEGIN: Side Menu */}
      <nav className="side-nav">
        <ul>
      <li>
        <div className="side-menu">
          <div className="side-menu__icon"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg> </div>
          <div className="side-menu__title">
            Menu Layout 
            <div className="side-menu__sub-icon"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg> </div>
          </div>
        </div>
        <ul className>
          <li>
            <a href="index.html" className="side-menu">
              <div className="side-menu__icon"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> </div>
              <div className="side-menu__title"> Side Menu </div>
            </a>
          </li>
          <li>
            <a href="simple-menu-light-dashboard-overview-1.html" className="side-menu">
              <div className="side-menu__icon"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> </div>
              <div className="side-menu__title"> Simple Menu </div>
            </a>
          </li>
          <li>
            <a href="top-menu-light-dashboard-overview-1.html" className="side-menu">
              <div className="side-menu__icon"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> </div>
              <div className="side-menu__title"> Top Menu </div>
            </a>
          </li>
        </ul>
      </li>
        </ul>
      </nav>
      {/* END: Side Menu */}
      </Fragment>
    )
}
export default SideNav;