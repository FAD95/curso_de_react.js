import React from "react";
import "./styles/homes.scss";
import NotFoundImg from "../images/monstruos.png";
import {Link} from "react-router-dom";

class NotFound extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main className="home">
          <section className="home__message">
            <h2>404 Error</h2>
            <p>The page you request does'nt exist</p>
            <Link className="btn btn-primary" to="/home">
              Come Home
            </Link>
          </section>

          <img className="home__img" src={NotFoundImg} alt="" />
        </main>
      </React.Fragment>
    );
  }
}

export default NotFound;
