import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './pm-header.scss'
import PMIconButton from '../icon-button/PMIconButton';
import { LogoImage, BackArrowImage } from '../../assets';
import ThemeSetter from '../../theme/ThemeSetter';

interface IPMHeader {
  backArrow: boolean,
  themeToggle: boolean,
  logo: boolean,
  title: string,
  className?: string,
  url?: string
}

function PMHeader(props: IPMHeader) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (props.url)
            navigate(props.url);
        else
            navigate(-1);
    }

    const titleStyle = (): string => {
        return props.logo ? "pm-header__logo-title" : "pm-header__title";
    }

    return(
        <div className={"pm-header " + props.className}>
            <PMIconButton hidden={!props.backArrow} onClick={handleBackClick}
            srcIcon={BackArrowImage} className="pm-header__arrow" />
            <div className="pm-header__logo">
                <img hidden={!props.logo} className="pm-header__logo-image" alt="" src={LogoImage} />
                <div className={titleStyle()}>{props.title}</div>
            </div>
            <div className="pm-header__setter">
                <ThemeSetter hidden={!props.themeToggle} />
            </div>
      </div>
    )
}

export default PMHeader;