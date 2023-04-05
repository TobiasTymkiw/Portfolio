import React, { Fragment } from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";


export default function App(): JSX.Element {
  return (
    <Fragment>
      <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
    </Fragment>
  );
}
