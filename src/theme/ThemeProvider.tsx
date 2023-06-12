import React, { useEffect, useState } from "react";
import ThemeContext, { initialThemeState } from "./ThemeContext";

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<string>(initialThemeState.theme);

    const localStorage = window.localStorage;
  
    useEffect(() => {
      const savedThemeLocal = localStorage.getItem('globalTheme');
  
      if (!!savedThemeLocal) {
        setTheme(savedThemeLocal);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('globalTheme', theme);
    }, [theme]);
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme--${theme}`}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
};

export default ThemeProvider;