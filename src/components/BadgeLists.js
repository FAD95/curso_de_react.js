import React from "react";
import { Link } from "react-router-dom";
import "./styles/css/BadgeLists.css";
import Gravatar from "./Gravatar";

class BadgesLists extends React.Component {
  state = {};
  render() {
    if (this.props.listValues.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="Badges-list">
          <div className="Badges__container">
            <ul className="list-unstyled">
              {this.props.listValues.map(badge => {
                return (
                  <li key={badge.id}>
                    <div className="List-element">
                      <Gravatar
                        className="List-element__avatar"
                        email={badge.email}
                        alt="Avatar"
                      />

                      <section className="List-element__info">
                        <h3>
                          {badge.firstName} {badge.lastName}
                        </h3>
                        <p>{badge.jobTitle}</p>
                        <p className="lead List-element__info__twitter">
                          <span>
                            <img
                              className="List-element__info__twitter--logo"
                              src="https://images.vexels.com/media/users/3/141372/isolated/lists/bf214a095a99c9aad3922f5a3a4ce2d4-boton-redondo-de-metal-de-twitter.png"
                              alt=""
                            />
                            @{badge.twitter}
                          </span>
                        </p>
                      </section>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgesLists;
