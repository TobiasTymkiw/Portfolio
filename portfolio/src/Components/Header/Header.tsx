import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-scroll";

export default function Header() {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    /* "Projects", */
    "Contact",
  ];

  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLocaleLowerCase()}Section`;

    return (
      <li key={content}>
        <Link
          activeClass={styles.active}
          className={styles.button}
          to={scrollToId}
          spy={true}
          smooth={true}
          duration={450}
        >
          {content}
          <span className={styles.line}></span>
        </Link>
      </li>
    );
  };

  const [selected, setSelected] = useState(false);
  const handleSelect = (selected: boolean) => {
    setSelected(!selected);
  };

  return (
    <header id="header" className={styles.header}>
      <nav className={styles.nav}>
        <label onClick={() => handleSelect(selected)} className={styles.burger}>
          <span
            className={`${styles.bar} ${selected ? styles.actbar : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${selected ? styles.actbar : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${selected ? styles.actbar : ""}`}
          ></span>
        </label>
        <Link
          activeClass={styles.active}
          className={styles.button}
          to="homeSection"
          spy={true}
          smooth={true}
          duration={450}
        >
          FullStack Developer
          <span style={{ height: "3px" }}></span>
        </Link>
        <ul className={`${styles.ul} ${selected ? styles.f : ""}`}>
          {navLinks.map((nav) => renderNavLink(nav))}
        </ul>
      </nav>
    </header>
  );
}
