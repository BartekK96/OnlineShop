import React, { Component } from "react";

import { withRouter } from "react-router-dom";

//importing consumer
import { DataConsumer } from "../contex/DataContex";

import LogOutNav from "./NavbarFolder/LogOutNav";
import LogInNav from "./NavbarFolder/LogInNav";
import LogInNavCart from "./NavbarFolder/LogInNavCart";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <DataConsumer>
        {value => {
          return this.props.history.location.pathname !== "/myCart" ? (
            typeof localStorage.token !== "undefined" ? (
              <LogInNav
                getSearch={value.getSearch}
                history={this.props.history}
              />
            ) : (
              <LogOutNav
                getSearch={value.getSearch}
                history={this.props.history}
              />
            )
          ) : (
            <LogInNavCart history={this.props.history} />
          );
        }}
      </DataConsumer>
    );
  }
}
export default withRouter(Navbar);
