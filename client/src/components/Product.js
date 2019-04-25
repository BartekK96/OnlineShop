import React, { Component } from "react";

//css
import styled from "styled-components";

export default class Product extends Component {
  render() {
    const { _id, name, price, img, inCart } = this.props.product;
    const addToCart = this.props.addToCart;

    return (
      <div className="col-md-3 p-2">
        <img className="card-img-top" src={img} />
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: {price}$</p>

            <button
              className="btn btn-primary"
              onClick={() => {
                if (!inCart) {
                  addToCart(_id);
                }
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
