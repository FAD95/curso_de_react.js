import React from "react";
import header from "../images/badge-header.svg";
import "./styles/css/BadgesNew.css";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <section className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="logo header" />
          </section>
          <section className="container">
            <div className="row">
              <div className="col-6">
                <Badge
                  firstName="Fadith"
                  lastName="Escorcia"
                  jobTitle="Front-end Developer"
                  twitter="Fad"
                />
              </div>
              <div className="col-6">
                  <BadgeForm />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default BadgeNew;
