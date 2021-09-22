import { Fragment } from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const MainLayout = (props) => {
    return (
      <Fragment>
        <Header/>
        <div className="wrapper">
          <div className="wrapper-box">
            <SideNav/>         
          {props.children} 
              
          </div>
        </div>
      </Fragment>
    )
}
export default MainLayout;