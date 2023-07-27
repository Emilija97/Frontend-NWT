import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './pm-header.scss'
import PMIconButton from '../icon-button/PMIconButton';
import { LogoImage, BackArrowImage, LogoutImage } from '../../assets';
import keycloak from "../../keycloak";
import { useDispatch } from 'react-redux';
import { logout } from '../../users/store/actions';

interface IPMHeader {
  backArrow: boolean,
//   themeToggle: boolean,
  logout: boolean,
  logo: boolean,
  title: string,
  className?: string,
  url?: string
}

function PMHeader(props: IPMHeader) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBackClick = () => {
        if (props.url)
            navigate(props.url);
        else
            navigate(-1);
    }

    const handleLogOut = () => {
        keycloak.doLogout();
        localStorage.clear();
        dispatch(logout())
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
            <div className='pm-header__logout '>
                <PMIconButton hidden={!props.logout} onClick={handleLogOut}
                srcIcon={LogoutImage} className={`${props.logout ? `pm-button__circle--icon-header` : `pm-button__circle`}`} />
            </div>
            {/* <div className="pm-header__setter">
                <ThemeSetter hidden={!props.themeToggle} />
            </div> */}
      </div>
    )
}

export default PMHeader;