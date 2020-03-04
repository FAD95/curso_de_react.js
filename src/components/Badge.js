import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/css/Badges.css";

class Badge extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Badge">
          <header className="Badge__header">
            <img src={confLogo} alt="Logo de la conferencia" />
          </header>
          <main>
            <section className="Badge__section-name">
              <img
                className="Badge__section-name--avatar"
                src="https://es.gravatar.com/avatar?d=identicon"
                alt="Avatar"
              />
              <h1>
                {this.props.firstName}
                <br />
                {this.props.lastName}
              </h1>
            </section>
            <section className="Badge__section-info">
              <h3>{this.props.jobTitle}</h3>
              <span>@{this.props.twitter}</span>
            </section>
          </main>
          <footer className="Badge__footer">#platziConf</footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Badge;
