import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import * as styles from "./index.module.css";

const ThemeSwitch = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className={styles.themeSwitch}>
          <input
            type="checkbox"
            onChange={(e) =>
              toggleTheme(e.target.checked ? "dark-theme" : "light-theme")
            }
            checked={theme === "dark-theme"}
          />{" "}
          <span></span>
        </label>
      )}
    </ThemeToggler>
  );
};

export default ThemeSwitch;
