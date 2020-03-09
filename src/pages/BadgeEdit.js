import React from "react";
import header from "../images/badge-header.svg";
import "./styles/css/BadgesEdit.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../components/styles/css/loaders.css";

class BadgeEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "Front-end Developer",
        twitter: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <Loader type="Circles" color="#00BFFF" height={125} width={125} />
        </div>
      );
    }
    return (
      <div>
        <main>
          <section className="BadgeEdit__hero">
            <img className="img-fluid" src={header} alt="logo header" />
          </section>
          <section className="container">
            <div className="row BadgeEdit__container">
              <div className="col-12 col-md-6">
                <Badge
                  firstName={this.state.form.firstName || "First name"}
                  lastName={this.state.form.lastName || "Last name"}
                  jobTitle={this.state.form.jobTitle || "Job title"}
                  twitter={this.state.form.twitter || "Twitter"}
                  email={this.state.form.email}
                />
              </div>
              <div className="col-12 col-md-6 mt-5">
                <BadgeForm
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                  formValues={this.state.form}
                  error={this.state.error}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default BadgeEdit;
