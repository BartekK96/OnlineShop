import React, { Component } from "react";

import Product from "../components/Product";

//css
import styled from "styled-components";

//importing consumer
import { DataConsumer } from "../contex/DataContex";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLogin: true,
      warning: false,
      success: false,
      name: null,
     
    };
  }


  showWarning(value) {
    this.setState({
      warning: value
    });

    document.documentElement.scrollTop = 0;
  }
  showSuccess(value) {
    this.setState({
      success: value,
      warning: false
    });

    document.documentElement.scrollTop = 0;
  }
  setName(value) {
    this.setState({
      name: value
    });
  }

  onClick(e) {
    this.showWarning();
    this.showSuccess();
  }

  componentDidMount() {
    if (!localStorage.firstLogin && this.state.firstLogin) {
      this.setState({
        firstLogin: false
      });
    }

    localStorage.removeItem("firstLogin");
  }

  render() {
    let login;
    if (this.state.firstLogin && localStorage.token) {
      login = (
        <div className="container text-center text-uppercase">
          <div className="alert alert-success   mt-4">Login Success</div>
        </div>
      );
    } else {
    }

    let info;
    if (this.state.warning) {
      info = (
        <div className="alert alert-warning text-uppercase text-center mt-4">
          {this.state.name} is already in cart
        </div>
      );
    } else if (this.state.success) {
      info = (
        <div className="alert alert-success text-uppercase text-center mt-4">
          {this.state.name} added to the cart
        </div>
      );
    }

    return (
      <div className="container">
        <div>{login}</div>
        <Title className="p-3 text-primary">Welcome to our store</Title>
        {info}
        <div className="row">
          <DataConsumer>
            {value => {
              return value.products.map(product => {
                return (
                  <Product
                    key={product._id}
                    product={product}
                    addToCart={value.addToCart}
                    showWarning={this.showWarning.bind(this)}
                    showSuccess={this.showSuccess.bind(this)}
                    setName={this.setName.bind(this)}
                    onClick={this.onClick.bind(this)}
                  />
                );
              });
            }}
          </DataConsumer>
        </div>
      </div>
    );
  }
}

const Title = styled.h1`
  text-align: center;
`;
