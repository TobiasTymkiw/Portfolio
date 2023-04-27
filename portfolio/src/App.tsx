import React from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Qualifications from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";

export default function App(): JSX.Element {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Qualifications></Qualifications>
      <Contact></Contact>
    </>
  );
}
