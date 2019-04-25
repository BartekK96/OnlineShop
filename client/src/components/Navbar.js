import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

//css
import styled from "styled-components";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push(`/`);
  }

  render() {
    const logOutNav = (
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
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Registser
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />

            <SearchButton>search</SearchButton>
          </form>
        </div>
      </nav>
    );
    const logInNav = (
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
              <Link
                to="/"
                onClick={this.logOut.bind(this)}
                className="nav-link"
              >
                Logout
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />

            <SearchButton>search</SearchButton>
          </form>
        </div>
      </nav>
    );

    return (
      <div className="con">{localStorage.token ? logInNav : logOutNav}</div>
    );
  }
}
export default withRouter(Navbar);

const SearchButton = styled.button.attrs(() => ({
  type: "submit",
  id: "searchButton"
}))`
  background: transparent;
  border: 0.05rem solid var(--lightGrey);
  border-radius: 0.5rem;
  padding: 0.4rem 0.7rem;
  text-transform: capitalize;
  &:hover {
    background: dimgray;
    color: var(--mainWhite);
  }
`;
