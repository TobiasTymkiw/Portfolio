import { Fragment } from "react";
import cvSvg from '../../assets/AboutMe/file-download-line.svg'
import styles from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <Fragment>
      <section id="About" className={styles.about}>
        <h2 className={styles.sectiontitle}>About Me</h2>
        <p>My introduction</p>
        <div className={styles.aboutMeContainer}>
          <img src={"Add a Gif"} alt="" className={styles.divImg}></img>
          <div className={styles.aboutInfo}>
            <div className={styles.cardsContainer}>
              <div className={styles.box}>
                <h3>Completed</h3>
                <p>12+ Projects</p>
              </div>
              <div className={styles.box}>
                <h3>Experience</h3>
                <p>1.5 years Working</p>
              </div>

              <div className={styles.box}>
                <h3>Support</h3>
                <p>Online 24/7</p>
              </div>
            </div>
            <p className={styles.aboutText}>
              I am a very creative and curious person who enjoys taking things
              apart and figuring out how they work. Currently, I work as a Full
              Stack Developer and have experience working on web projects that
              can be scaled up for team collaboration. I consider myself a
              committed person, eager to learn, constantly pushing my limits,
              being optimistic and perseverant. I am in search of new challenges
              to obtain solutions.
            </p>
            <button>
              Download CV <img src={cvSvg} alt=""></img>
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default AboutMe;
