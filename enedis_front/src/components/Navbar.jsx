import React from "react";
import logo from "../assets/logo_fondBleu.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogoContainer">
        <Link to="/">
          <img className="navbarLogo" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbarImgContainer">
        <Link to="/signal">
          <svg width="2em" height="2em" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M2 17v3h8v-1.89H3.9V17c0-.64 3.13-2.1 6.1-2.1c.96.01 1.91.14 2.83.38l1.52-1.52c-1.4-.47-2.85-.73-4.35-.76c-2.67 0-8 1.33-8 4m8-13C7.79 4 6 5.79 6 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m11.7 3.35l-1 1l-2.05-2l1-1a.55.55 0 0 1 .77 0l1.28 1.28c.21.21.21.56 0 .77M12 18.94l6.06-6.06l2.05 2l-6 6.07H12v-2.01"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="navbarImgContainer">
        <Link to="/signal">
          <svg width="2em" height="2em" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5Z"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="navbarImgContainer">
        <Link to="/connexion">
          <svg width="2em" height="2em" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M10 17v-3H3v-4h7V7l5 5l-5 5m0-15h9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2h2v2h9V4h-9v2H8V4a2 2 0 0 1 2-2Z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
