import { createContext } from "react";

export const themes = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    background: "#000000",
    color: "#ffffff",
  },
  blue: {
    background: "#0000ff",
    color: "#ffffff",
  },
};

export const ThemeContext = createContext(themes.dark);
