import styles from "../styles/dark-mode.module.css";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { darkModeBtn } from "../assets";

const DarkMode = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme")
  );

  useEffect(() => {
    if (selectedTheme === "light") {
      setLightMode();
    } else {
      setDarkMode();
    }
  }, [selectedTheme]);

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const toggleTheme = () => {
    if (selectedTheme === "light") {
      setSelectedTheme("dark");
    } else {
      setSelectedTheme("light");
    }
  };

  return (
    <ReactSVG
      src={darkModeBtn}
      className={styles["dark-mode-btn"]}
      onClick={toggleTheme}
      checked={selectedTheme === "light"}
    />
  );
};

export default DarkMode;
