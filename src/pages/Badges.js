import React from "react";
import BadgeLists from "../components/BadgeLists";
import "./styles/css/Badges.css";
import "../components/styles/css/loaders.css";
import BadgeHero from "../images/badge-header.svg";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import api from "../api";
import PageError from "../components/PageError";
class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined,
      error: null
    };
  }
  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 2000);
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

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    if (this.state.loading && !this.state.data) {
      return (
        <div className="loader">
          <Loader type="Circles" color="#00BFFF" height={125} width={125} />
        </div>
      );
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
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
            <Loader type="Puff" color="#00BFFF" height={50} width={50} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Badges;
