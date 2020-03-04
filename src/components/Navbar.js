import React from "react";
import logo from "../images/logo.svg";
import "./styles/css/Navbars.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="Navbar">
          <div className="container-fluid">
            <Link className="Navbar__brand" to="/curso_de_react.js/home/">
              <img className="Navbar__brand-logo" src={logo} alt="Logo" />
              <span className="font-weight-light">Platzi</span>
              <span className="font-weight-bold">Conf</span>
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
