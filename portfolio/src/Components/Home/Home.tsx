import React, { Fragment } from "react";
import LinkedinSVG from "../../assets/Home/linkedin-box-fill.svg";
import GitHubSVG from "../../assets/Home/github-fill.svg";
import chatImg from "../../assets/Home/message-2-line.svg";
/* import portrait from "../../assets/Home/CV.jpg";*/
import portrait2 from "../../assets/Home/HomeProfile.jpg";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <Fragment>
      <section id='Home' className={styles.home}>
        <div className={styles.container}>
          <div className={styles.linksIcon}>
            <a
              href="https://www.linkedin.com/in/tobias-tymkiw/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={LinkedinSVG}
                alt="SocialMediaIcon"
                className={styles.svgSocial}
              />
            </a>
            <a
              href="https://github.com/TobiasTymkiw"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={GitHubSVG}
                alt="SocialMediaIcon"
                className={styles.svgSocial}
              />
            </a>
          </div>
          <div className={styles.profileContainer}>
            <div>
              <h1 id="#Home">
                Hello There!!
                <p>🖐</p>
              </h1>
              <h1>
                <span>----</span>I'm Tobias Tymkiw
              </h1>
              <p>
                A Full-Stack web Developer based in Chaco,Argentina. I'm very
                passionate and dedicated to my work.
              </p>
              {/* Contact button to that section */}
            </div>
            <button className={styles.contactButton}>
              Contact Me! <img src={chatImg} alt="Message-Icon"></img>
            </button>
          </div>
          <div className={styles.divimg}>
            <img
              src={portrait2}
              alt="CV-img"
              className={styles.imgProfile}
            ></img>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
