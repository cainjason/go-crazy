import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import NavbarData from "./NavbarData";
import "../App.css";
import { IconContext } from 'react-icons';

function Sidebar() {
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(navbar);
  
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showNavbar} />
          </Link>
        </div>
        <nav className={navbar ? "navbar-menu active" : "navbar-menu"}>
          <ul className="navbar-menu-items" onClick={showNavbar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar;
