import React from "react";
import "./styles/css/BadgeForms.css";
class BadgeForm extends React.Component {
  // state={
  //   jobTitle: "Front-end Developer"
  // };
  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <div className="form">
          <h1>{this.props.title}</h1>
          <form onSubmit={this.props.onSubmit} action="">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={this.props.onChange}
                placeholder="Enter your name here"
                id="firstName"
                className="form-control"
                name="firstName"
                type="text"
                value={this.props.formValues.firstName}
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={this.props.onChange}
                placeholder="Enter your last name here"
                id="lastName"
                className="form-control"
                name="lastName"
                type="text"
                value={this.props.formValues.lastName}
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={this.props.onChange}
                placeholder="Enter your email here"
                id="email"
                className="form-control"
                name="email"
                type="email"
                required
                value={this.props.formValues.email}
              />
              <label htmlFor="jobTitle">Job Title</label>
              <input
                onChange={this.props.onChange}
                placeholder="Enter your job title here"
                id="jobTitle"
                className="form-control"
                name="jobTitle"
                type="text"
                value={this.props.formValues.jobTitle}
              />
              <label htmlFor="twitter">Twitter</label>
              <input
                onChange={this.props.onChange}
                placeholder="Enter your twitter here"
                id="twitter"
                className="form-control"
                name="twitter"
                type="text"
                value={this.props.formValues.twitter}
              />
              <br />
              <button
                type="submit"
                onClick={this.handleClick}
                className="btn btn-primary"
              >
                Submit
              </button>
              {this.props.error &&(
              <p className="text-danger">{this.props.error.message}</p>
              )}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
