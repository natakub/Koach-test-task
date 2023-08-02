import styles from "../styles/dark-mode.module.css";
import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { darkModeBtn } from "../assets";

const DarkMode = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || "light"
  );

  useEffect(() => {
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
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
      checked={selectedTheme === "dark"}
    />
  );
};

export default DarkMode;
