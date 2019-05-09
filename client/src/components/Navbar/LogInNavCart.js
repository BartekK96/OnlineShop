import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class LogInNavCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.getSearch(this.state.search);
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push(`/`);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Products
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/myCart" className="nav-link">
                My Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" onClick={this.logOut} className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
