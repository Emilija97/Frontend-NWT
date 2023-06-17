import React, { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { sidebarItems } from "./SidebarData";
import './pm-navbar.scss';
import ThemeSetter from "../../theme/ThemeSetter";
import { DashboardImage, MenuImage, SettingsImage } from "../../assets";
import PMIconButton from "../icon-button/PMIconButton";

interface PMNavbarProps {
    collapsed: boolean,
    setCollapsed: (collapsed: boolean) => void
    setTab: (tabValue:any) => void
}

function PMNavbar({collapsed, setCollapsed, setTab}:PMNavbarProps) {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <div className="pm-navbar">
        <div className={`pm-navbar${collapsed ? `__menu--active` : `__menu`}`}>
          <PMIconButton hidden={false} onClick={() => setCollapsed(!collapsed)}
            srcIcon={MenuImage} />
        </div>
          {collapsed ? 
          (<nav className={`pm-navbar${collapsed ? `__nav-menu--active` : `__nav-menu`}`}>
            <ul className="pm-navbar__nav-menu-items" onClick={() => setCollapsed(!collapsed)}>
              {sidebarItems.map((item, index) => {
                return (
                  <li key={index} className={item.cName} onClick={() => setTab(item.tabValue)}>
                    <Link to={item.url} className="pm-navbar__link">
                    <PMIconButton className="pm-button__circle--icon" srcIcon={item.imageSrc} />
                    <div className="pm-navbar__dashboard-card__title">{item.title}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>) :(
            <nav className="pm-navbar__nav-menu-collapsed">
              <ul className="pm-navbar__nav-menu-items-collapsed">
                {sidebarItems.map((item, index) => {
                  return (
                    <li key={index} className="pm-navbar__dashboard">
                      <PMIconButton className="pm-button__circle--icon" srcIcon={item.imageSrc} />
                    </li>
                  );
                })}
                </ul>
            </nav>    
          )}

          {/* <ul className="pm-navbar__nav-menu-items" onClick={() => setCollapsed(!collapsed)}>
            <li className="pm-navbar__nav-text">
              <Link to={"/settings"} className="pm-navbar__link">
              <img className="pm-navbar__dashboard-card__image" alt="" src={SettingsImage} />
              <div className="pm-navbar__dashboard-card__title">Settings</div>
              </Link>
            </li>
          </ul> */}

          {collapsed ? 
          (
          <nav className={`pm-navbar${collapsed ? `__nav-settings--active` : `__nav-settings`}`}>
            <ul className="pm-navbar__nav-settings-items">
              <li className="pm-navbar__nav-text" onClick={() => setTab(3)}>
                <Link to="/dashboard" className="pm-navbar__link">
                <PMIconButton className="pm-button__circle--icon" srcIcon={SettingsImage} />
                <div className="pm-navbar__settings-card__title">Settings</div>
                </Link>
              </li>
            </ul>
          </nav>) :(
            <nav className="pm-navbar__nav-settings-collapsed">
            <ul className="pm-navbar__nav-settings-items-collapsed">
              <li className="pm-navbar__dashboard">
                <PMIconButton className="pm-button__circle--icon" srcIcon={SettingsImage} />
              </li>
              {/* <li>
                <img className="pm-navbar__dashboard" alt="" src={SettingsImage} />
              </li> */}
            </ul>
          </nav>
          )}

          <div className="pm-navbar__theme-setter">
                <ThemeSetter hidden={!collapsed} />
            </div>
      </div>
    );
  }
  
  export default PMNavbar;