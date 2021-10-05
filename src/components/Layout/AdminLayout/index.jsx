import { Fragment } from "react";
import Container from "../Container";
import Content from "../Content";
import Header from "./Header";
import SideNav from "./SideNav";

const AdminLayout = (props) => {
    return (
      <Fragment>
        <Header/>
        <Container>
          <SideNav/>    
          <Content>
            {props.children}
          </Content>   
        </Container>
      </Fragment>
    )
}
export default AdminLayout;