import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
export default function SwitchButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const onClick = () => {
      if (darkMode) {
        theme.dispatch({ type: "LIGHTMODE" });
      } else {
        theme.dispatch({ type: "DARKMODE" });
      }
    };
  
    return (
      <button className={`btn ${darkMode ? "bg-dark text-white" : "bg-light text-gray-600"}`} onClick={onClick}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    );
  }