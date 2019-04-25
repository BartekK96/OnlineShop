import React, { Component } from "react";

import CartProduct from "./CartProduct";

export default class CartList extends Component {
  render() {
    const { value } = this.props;
    const cart = value.cart;

    return (
      <div className="container-fluid">
        {cart.map(product => {
          return <CartProduct key={product._id} product={product} value = {value}/>;
        })}
      </div>
    );
  }
}
