import React from "react";
import logo from "../images/logo.svg";
import "./styles/Navbars.scss";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="Navbar navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/home">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/badges">
                  Badges
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rickandmorty">
                  Rick And Morty
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
