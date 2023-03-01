import React, { Fragment } from "react";
import portrait from "../../assets/CV.jpg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <h1>Hello There👋, I'm Tobias Tymkiw</h1>
      <p>
        A Full-Stack web Developer based in Chaco,Argentina. I'm very passionate
        and dedicated to my work.
      </p>
      <div >
        <img src={portrait} alt="CV-img" className={styles.img}></img>
      </div>
      <p> some icons to the socials medias and a contact botton to the form</p>
    </Fragment>
  );
}
