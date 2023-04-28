import styles from "./Footer.module.scss";
import LinkedinSVG from "../../assets/Home/linkedin-box-fill.svg";
import GitHubSVG from "../../assets/Home/github-fill.svg";

export default function Footer() {
  const navLinks = [
    "About",
    "Skills",
    "Experience",
    /* "Projects", */
  ];

  const linkIcons = [
    {
      ref: "https://www.linkedin.com/in/tobias-tymkiw/",
      img: LinkedinSVG,
    },
    {
      ref: "https://github.com/TobiasTymkiw",
      img: GitHubSVG,
    },
  ];

  const handleClickNav = (scrollToId: string) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };
  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLocaleLowerCase()}Section`;

    return (
      <li key={content}>
        <button
          className={styles.button}
          onClick={() => handleClickNav(scrollToId)}
        >
          <>{content}</>
          <div className={styles.line}></div>
        </button>
      </li>
    );
  };
  const renderLinkIcon = (content: (typeof linkIcons)[0]) => {
    return (
      <a
        key={content.ref}
        href={content.ref}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={content.img}
          alt="SocialMediaIcon"
          className={styles.svgSocial}
        />
      </a>
    );
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <h2>Tobias Tymkiw</h2>
          <ul className={styles.ulNav}>
            {navLinks.map((link) => renderNavLink(link))}
          </ul>
          <div className={styles.linksIcon}>
            {linkIcons.map((link) => renderLinkIcon(link))}
          </div>
          <span>©Copyright 2023. All rigths reserved</span>
        </div>
      </footer>
    </>
  );
}
