import React, { Component } from "react";

import { register } from "../components/UserFunctions";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();

    const user = {
      login: this.state.login,
      password: this.state.password
    };
    register(user).then(res => {
     
        this.props.history.push(`/login`);
    
    });
  };

  render() {
    return (
      <div className="con">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
              <div className="form-group">
                <label htmlFor="login">Register</label>
                <input
                  type="login"
                  className="form-control"
                  name="login"
                  placeholder="Enter login..."
                  value={this.state.login}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password..."
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit"className="btn btn-lg btn-primary btn-block">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}