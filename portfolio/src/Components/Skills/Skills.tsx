import styles from "./Skills.module.scss";
import Medal from "../../assets/Skills/medal-line.svg";

export default function Skills() {
  return (
    <>
      <section id="Skills" className={styles.Skills}>
        <div className={styles.container}>
          <h2>Skills</h2>
          <p>My technical level</p>
          <div className={styles.infocontainer}>
            <div className={styles.box}>
              <h2>Front end</h2>
              <div className={styles.groupseparation}>
                <div className={styles.skillsgroup}>
                  <div className={styles.skillsdata}>
                    <img src={Medal} alt="Medal-Icon"></img>
                    <div>
                      <h3 className={styles.skillsname}>HTML</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <img src={Medal} alt="Medal-Icon"></img>
                    <div>
                      <h3 className={styles.skillsname}>TypeScript</h3>
                      <p>Beginner</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <img src={Medal} alt="Medal-Icon"></img>
                    <div>
                      <h3 className={styles.skillsname}>React</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <img src={Medal} alt="Medal-Icon"></img>
                    <div>
                      <h3 className={styles.skillsname}>JavaScript</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                </div>
                <div className={styles.skillsgroup}>
                  <div className={styles.skillsdata}>
                    <img src={Medal} alt="Medal-Icon"></img>
                    <div>
                      <h3 className={styles.skillsname}>HTML</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <img src={Medal} alt="Medal-Icon"></img>
                    <div>
                      <h3 className={styles.skillsname}>TypeScript</h3>
                      <p>Beginner</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <img src={Medal} alt="Medal-Icon"></img>
                    <div>
                      <h3 className={styles.skillsname}>React</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className={styles.skillsdata}>
                    <img src={Medal} alt="Medal-Icon"></img>
                    <div>
                      <h3 className={styles.skillsname}>JavaScript</h3>
                      <p>Advanced</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SecondBox */}
            <div className={styles.box}>
              <div className={styles.skillsgroup}>
                <div className={styles.skillsdata}>
                  <img src={Medal} alt="Medal-Icon"></img>
                  <div>
                    <h3 className={styles.skillsname}>HTML</h3>
                    <p>Advanced</p>
                  </div>
                </div>
              </div>
              {/* Second */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
