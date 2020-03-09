import React from "react";
import BadgeLists from "../components/BadgeLists";
import "./styles/css/Badges.css";
import "../components/styles/css/loaders.css";
import BadgeHero from "../images/badge-header.svg";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import api from "../api";
class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      error: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });
    console.log({
      Props: this.props,
      State: this.state
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeId);
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <section className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
                <img className="Badges__logo" src={BadgeHero} alt="" />
              </div>
            </div>
          </section>
          <section className="Badges__container">
            <div className="Badges__buttons">
              <Link
                to="/badges/new"
                className="Badges__buttons btn btn-primary"
              >
                New Badge
              </Link>
            </div>
            <BadgeLists listValues={this.state.data} />
          </section>
        </main>
        {this.state.loading && (
          <div className="loader">
            <Loader
              type="Circles"
              color="#00BFFF"
              height={125}
              width={125}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Badges;
