import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import './theme-setter.scss';
import { MoonImage, SunImage } from "../assets";

type ThemeOption = {
    value: string;
  };
  
const themeOptions: ThemeOption[] = [
  { value: 'light' },
  { value: 'dark' }
];

interface ThemeSetterProps {
  hidden?: boolean
}

function ThemeSetter(props: ThemeSetterProps) {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setTheme(e.currentTarget.value);
    };
  
    const onClick = () => {
      setTheme((s) => 
        s === 'dark'? 'light' : 'dark'
      )
    }
    return (
      <div hidden={props.hidden}>
        <div onClick={onClick} className='theme-setter'>
          <div className={`theme-setter__light ${theme === 'light' ? `theme-setter__status-selected`
          : `theme-setter__status-inactive`}`}>
            <img src={SunImage} alt="" className="theme-setter__image"/>
            <p className="theme-setter__text">Light</p>
          </div>
          <div className={`theme-setter__dark ${theme === 'dark' ? `theme-setter__status-selected`
          : `theme-setter__status-inactive`}`}>
            <img src={MoonImage} alt="" className="theme-setter__image"/>
            <p className="theme-setter__text">Dark</p>
          </div>
        </div>
      </div>
    );
}

export default ThemeSetter;