import React from "react";

class BadgeForm extends React.Component {
    state={
        firstName:"",
        lastName:"",
        email: "",
        jobTitle: "Front-end Developer",
        twitter:""
    };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    console.log("Button clicked");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submited");
    console.log(this.state);
    
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit} action="">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              placeholder="Enter your name here"
              id="firstName"
              className="form-control"
              name="firstName"
              type="text"
              value={this.state.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.handleChange}
              placeholder="Enter your last name here"
              id="lastName"
              className="form-control"
              name="lastName"
              type="text"
              value={this.state.lastName}
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              placeholder="Enter your email here"
              id="email"
              className="form-control"
              name="email"
              type="email"
              required
              value={this.state.email}
            />
            <label htmlFor="jobTitle">Job Title</label>
            <input
              onChange={this.handleChange}
              id="jobTitle"
              className="form-control"
              name="jobTitle"
              type="text"
                value={this.state.jobTitle}
            />
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={this.handleChange}
              placeholder="Enter your twitter here"
              id="twitter"
              className="form-control"
              name="twitter"
              type="text"
              value={this.state.twitter}
            />
            <br />
            <button
              type="submit"
              onClick={this.handleClick}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
