import React, { Component } from "react";

import { register } from "../components/UserFunctions";

import { Link } from "react-router-dom";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      msg: "",
      success: false
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
      if (res.status === 400) {
        this.setState({
          msg: res.data.msg
        });
      } else if (res.status === 200) {
        this.setState({
          success: true,
          msg: res.data.msg
        });
      }
    });
  };

  render() {
    let error;

    if (!this.state.success && this.state.msg.length > 0) {
      error = (
        <div className="alert alert-danger text-uppercase text-center mt-4">
          {this.state.msg}
        </div>
      );
    } else if (this.state.success) {
      error = (
        <div className="container text-center text-uppercase">
          <div className="alert alert-success   mt-4">{this.state.msg}</div>
          <span className=" mt-4">
            <Link to="/login">Login to your account</Link>
          </span>
        </div>
      );
    }

    const errorRegister = (
      <div className="container">
        <div>{error}</div>
        <div className="row">
          <div className="col-md-6 mt-3 mx-auto">
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
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
    return (
      <div className="container">
        {this.state.success ? error : errorRegister}
      </div>
    );
  }
}
