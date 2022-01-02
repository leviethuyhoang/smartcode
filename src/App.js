import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import in project
import Routes from "./routes";

function App() {
  return (
    <Fragment>
      <Routes/>
      <ToastContainer/>
    </Fragment>
    );
}

export default App;
