import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const navLinks = [
    "FullStack Developer",
    "Home",
    "About",
    "Skills",
    "Qualifications",
    "Projects",
    "Contact",
  ];
  const renderNavLink = (content: string) => {
    const scrollToId = `${content.toLocaleLowerCase()}Section`;

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <li key={content}>
        <button onClick={() => handleClickNav()}>{content}</button>
      </li>
    );
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {navLinks.map((nav) => renderNavLink(nav))}
        </ul>
      </nav>
    </header>
  );
}
