import React from "react";
import logo from "../images/logo.svg";
import "./styles/css/Navbars.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="container-fluid">
          <a className='Navbar__brand' href="/">
            <img className='Navbar__brand-logo' src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
