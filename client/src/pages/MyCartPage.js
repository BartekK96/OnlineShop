import React, { Component } from "react";

//importing consumer
import { DataConsumer } from "../contex/DataContex";

import CartList from "../components/CartList";
import CartColumns from "../components/CartColumns";
import CartOrder from "../components/CartOrder";

//css
import styled from "styled-components";

export default class MyCartPage extends Component {
  componentDidMount() {
    if (localStorage.token) {
    } else {
      this.props.history.push("/error");
    }
  }

  render() {
    return (
      <div className="container">
        <Title className="text-primary p-2">Your shopping cart</Title>
        <DataConsumer>
          {value => {
            const cart = value.cart;
            if (cart.length) {
              return (
                <div className="container">
                  <CartColumns />
                  <CartList value={value} />
                  <CartOrder value={value} history={this.props.history} />
                </div>
              );
            } else {
              return <h2 className="text-capitalize text-center text-secondary">your cart is currently empty</h2>;
            }
          }}
        </DataConsumer>
      </div>
    );
  }
}

const Title = styled.h1`
  text-align: center;
`;
