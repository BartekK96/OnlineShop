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
        <Title>Your shopping cart</Title>
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
              return <div>your cart is currently empty</div>;
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
