import styles from "../styles/navbar.module.css";

import { useState } from "react";
import { ReactSVG } from "react-svg";
import { DarkMode } from "../components";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`${styles.navbar} container `}>
      <a href="https://koach.live/" target="_blank" rel="noopener noreferrer">
        <img className="img-responsive" src={logo} alt="koach logo" />
      </a>
      <ReactSVG
        className={styles["menu-btn"]}
        src={toggle ? close : menu}
        onClick={() => setToggle((prev) => !prev)}
      />
      <nav
        className={`${toggle ? [styles.block] : [styles.hidden]} ${
          styles.menu
        }`}
      >
        <ul className={styles["nav-list"]}>
          {navLinks.map((nav) => (
            <li key={nav.id} className={styles["nav-item"]}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`${toggle ? [styles.flex] : [styles.hidden]} ${
          styles["nav-buttons"]
        }`}
      >
        <DarkMode />
        <button className="button ">Login</button>
        <button className="button">Sign up</button>
      </div>
    </header>
  );
};

export default Navbar;
