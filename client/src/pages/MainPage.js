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
      firstLogin: true
    };
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

    return (
      <div className="container">
        <div>{login}</div>
        <Title className="p-3">Welcome to our store</Title>
        <div className="row">
          <DataConsumer>
            {value => {
              return value.products.map(product => {
                return (
                  <Product
                    key={product._id}
                    product={product}
                    addToCart={value.addToCart}
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
