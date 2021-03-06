import React from "react";

export const themes = {
  dark: {
    color: "white",
    background: "#222629",
    padding: "5px",
  },
  light: {
    color: "black",
    background: "#EAEDED",
    padding: "5px",
  },
};
const themeContext = React.createContext(themes.light);
export default themeContext;
