import React, { Component } from "react";

import PayPal from "./PayPal";

export default class CartOrder extends Component {
  render() {
    const { orderTotal, clearCart, cart } = this.props.value;
    const history = this.props.history;
    return (
      <div className="container">
        <div className="row float-right">
          <div className="text-capitalize">
            <button
              className="btn btn-outline-danger text-uppercase"
              type="button"
              onClick={() => clearCart()}
            >
              Clear cart
            </button>
            <h2 className="text-capitalize mt-2">
              total: <strong>{orderTotal} $</strong>
            </h2>

            <PayPal
              total={orderTotal}
              clearCart={clearCart}
              history={history}
              cart={cart}
              
            />
          </div>
        </div>
      </div>
    );
  }
}
