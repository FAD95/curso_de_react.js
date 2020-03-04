import React from "react";
import header from "../images/badge-header.svg";
import "./styles/css/BadgesNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "Front-end Developer",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div>
        <main>
          <section className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="logo header" />
          </section>
          <section className="container">
            <div className="row ">
              <div className="col-12 col-md-6">
                <Badge
                  firstName={this.state.form.firstName}
                  lastName={this.state.form.lastName}
                  jobTitle={this.state.form.jobTitle}
                  twitter={this.state.form.twitter}
                />
              </div>
              <div className="col-12 col-md-6 mt-5">
                <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default BadgeNew;
