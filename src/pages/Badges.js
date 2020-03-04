import React from "react";
import BadgeLists from "../components/BadgeLists"
import "./styles/css/Badges.css";
import BadgeHero from "../images/badge-header.svg";
import {Link} from "react-router-dom";
class Badges extends React.Component {
    state={
        data:[
            {
              id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
              firstName: 'Freda',
              lastName: 'Grady',
              email: 'Leann_Berge@gmail.com',
              jobTitle: 'LegacyBrandDirector',
              twitter: 'FredaGrady22221-7573',
              avatarUrl:
                'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
            },
            {
              id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
              firstName: 'Major',
              lastName: 'Rodriguez',
              email: 'Ilene66@hotmail.com',
              jobTitle: 'HumanResearchArchitect',
              twitter: 'MajorRodriguez61545',
              avatarUrl:
                'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
            },
            {
              id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
              firstName: 'Daphney',
              lastName: 'Torphy',
              email: 'Ron61@hotmail.com',
              jobTitle: 'NationalMarketsOfficer',
              twitter: 'DaphneyTorphy96105',
              avatarUrl:
                'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
            },
          ],
    }

  render() {
    return (
      <React.Fragment>
        <main>
          <section className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container r">
                <img className="Badges_conf-logo" src={BadgeHero} alt="" />
              </div>
            </div>
          </section>
          <section className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="Badges__buttons btn btn-primary">
                New Badge
              </Link>
            </div>
            <BadgeLists listValues={this.state.data}/>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Badges;
