import React from "react";
import "./styles/homes.scss";
import logo from "../images/astronauts.svg";
import platziLogo from "../images/home-logo.svg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="home">
          <section className="home__message">
            <img className="home__message--logo" src={platziLogo} alt="" />
            <h2>Print your badges</h2>
            <p>The easiest way to manage your conference</p>
            <Link className="btn btn-primary" to="/badges">Start now</Link>
          </section>

          <img className="home__img" src={logo} alt="" />
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
