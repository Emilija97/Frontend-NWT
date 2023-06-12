import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarItems } from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './pm-navbar.scss';

function PMNavbar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <div className="pm-navbar">
          <div className="pm-navbar__menu-bars">
            <Link to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {sidebarItems.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.url}>
                    <img className="dashboard-card__image" alt="" src={item.imageSrc} />
                    <div className="dashboard-card__title">{item.title}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
      </div>
    );
  }
  
  export default PMNavbar;