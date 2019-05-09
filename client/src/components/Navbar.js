import React, { Component } from "react";

import { withRouter } from "react-router-dom";

//importing consumer
import { DataConsumer } from "../contex/DataContex";

import LogOutNav from "./Navbar/LogInNav";
import LogInNav from "./Navbar/LogInNav";
import LogInNavCart from "./Navbar/LogInNavCart";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.search);
    //const search = this.state.search;
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push(`/`);
  }

  render() {
    return (
      <DataConsumer>
        {value => {
          return this.props.history.location.pathname !== "/myCart" ? (
            localStorage.token ? (
              <LogInNav getSearch={value.getSearch} />
            ) : (
              <LogOutNav getSearch={value.getSearch} />
            )
          ) : (
            <LogInNavCart />
          );
        }}
      </DataConsumer>
    );
  }
}
export default withRouter(Navbar);
