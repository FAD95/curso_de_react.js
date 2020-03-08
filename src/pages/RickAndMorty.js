import React from "react";
import RickAndMortyLists from "../components/RickAndMortyLists";
import "./styles/css/RickAndMorty.css";
import BadgeHero from "../images/rickandmorty.png";
class Badges extends React.Component {
   
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount()");
  }
  render() {
    console.log("2/4. render()");

    return (
      <React.Fragment>
        <main className="RickAndMorty">
          <section >
            <div className="RickAndMorty__hero">
              <div className="RickAndMorty__container">
                <img className="RickAndMorty__logo" src={BadgeHero} alt="" />
              </div>
            </div>
          </section>
          <section className="RickAndMorty__container">
            <div className="container"></div>
            <RickAndMortyLists/>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Badges;
