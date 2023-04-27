import React, { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    /* "Projects", */
    "Contact",
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
          {content}
        </button>
      </li>
    );
  };

  const [selected, setSelected] = useState(false);
  const handleSelect = (selected: boolean) => {
    setSelected(!selected); 
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <label onClick={() => handleSelect(selected)} className={styles.burger}>
          <span className={`${styles.bar} ${selected ? styles.actbar : ''}`}></span>
          <span className={`${styles.bar} ${selected ? styles.actbar : ''}`}></span>
          <span className={`${styles.bar} ${selected ? styles.actbar : ''}`}></span>
        </label>
        <button
          className={styles.button}
          onClick={() => handleClickNav("homeSection")}
        >
          FullStack Developer
        </button>
        <ul className={`${styles.ul} ${selected ? styles.f :''}`}>
          {navLinks.map((nav) => renderNavLink(nav))}
        </ul>
      </nav>
    </header>
  );
}
