import React from "react";
import logo from "../assets/logo_fondBleu.png";
import logo_signaler from "../assets/logo_signaler.png";
import logo_carte from "../assets/logo_carte.png";
import logo_connexion from "../assets/logo_connexion.png";
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
        {/* <span>Signaler</span> */}
        <img className="navbarImg" src={logo_signaler} alt="" />
      </Link>
      </div>
      <div className="navbarImgContainer">
      <Link to="/signal">
        {/* <span>Carte</span> */}
        <img className="navbarImg" src={logo_carte} alt="" />
      </Link>
      </div>
      <div className="navbarImgContainer">
      <Link to="/connexion">
        {/* <span>Connexion</span> */}
        <img className="navbarImg" src={logo_connexion} alt="" />
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
