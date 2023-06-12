import React, { createContext } from "react";

type ThemeState = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  };
  
export const initialThemeState: ThemeState = {
    theme: 'light',
    setTheme: () => null,
};

const ThemeContext = createContext(initialThemeState);

export default ThemeContext;