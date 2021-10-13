import { Fragment } from "react";
import Container from "../Container";
import Content from "../Content";
import Header from "../Header";

const MainLayout = (props) => {
    return (
      <Fragment>
        <Header/>
        <Container>   
          <Content>
            {props.children}
          </Content>   
        </Container>
      </Fragment>
    )
}
export default MainLayout;