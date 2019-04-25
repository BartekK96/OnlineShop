import React, { Component } from "react";

import { login } from "../components/UserFunctions";

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: "",
      msg: ""
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
    login(user).then(res => {
      if (res.hasOwnProperty("data")) {
        this.setState({
          msg: res.data.msg
        });
      } else if (res) {
        localStorage.setItem("firstLogin", "is");
        this.props.history.push(`/`);
      }
    });
  };

  render() {
    let error;
    if (this.state.msg.length > 0) {
      error = (
        <div className="alert alert-danger text-uppercase text-center mt-4">
          {this.state.msg}
        </div>
      );
    }

    return (
      <div className="container">
        <div>{error}</div>
        <div className="row">
          <div className="col-md-6 mt-3 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="login">Login</label>
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
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
