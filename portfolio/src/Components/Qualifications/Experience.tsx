import styles from "./Experience.module.scss";

export default function Qualifications() {
  const studies = [
    {
      title: "Fundamentals of Programming",
      time: "May. 2021 - Jul. 2021",
      where: "Fundación Telefónica",
      position: "left",
    },
    {
      title: "Full Stack Web Development BootCamp",
      time: " Oct. 2021 - Aug. 2022",
      where: "Soy Henry",
      position: "right",
    },
    {
      title: `Rebirth Academic Project`,
      time: "Jul. 2022 - Aug. 2022",
      where: "Soy Henry",
      position: "left",
    },
    {
      title: "Proyment WebPage Work Experience",
      time: "Mar. 2023 - Apr. 2023",
      where: "Proyment",
      position: "right",
    },
    /* {
      title: "Something5",
      time: "2021 - 2022",
      where: "soyHenry",
      position: "left",
    },
    {
      title: "Something6",
      time: "2021 - 2022",
      where: "soyHenry",
      position: "right",
    },
    {
      title: "Something7",
      time: "2021 - 2022",
      where: "soyHenry",
      position: "left",
    },
    {
      title: "Something8",
      time: "2021 - 2022",
      where: "soyHenry",
      position: "right",
    },
    {
      title: "Something9",
      time: "2021 - 2022",
      where: "soyHenry",
      position: "left",
    }, */
  ];
  const renderView = (content: typeof studies[0]) => {
    return (
      <div
        key={content.title}
        className={`${styles.container} ${styles[`${content.position}`]}`}
      >
        <div className={`${styles.point} ${styles[`p${content.position}`]}`}></div>
        <div className={styles.textbox}>
          <h2>{content.title}</h2>
          <small>{content.time}</small>
          <p>{content.where}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <section id="experienceSection" className={styles.qualification}>
        <div className={styles.container}>
          <h2>Experiences</h2>
          <p>My personal journey</p>
          <div className={styles.timeline}>
            <div className={styles.line}></div>
            {studies.map((st) => renderView(st))}
          </div>
        </div>
      </section>
    </>
  );
}
