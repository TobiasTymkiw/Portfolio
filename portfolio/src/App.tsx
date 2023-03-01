import React, { Fragment } from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";


export default function App(): JSX.Element {
  return (
    <Fragment>
      <Header></Header>
      <Home></Home>
    </Fragment>
  );
}
