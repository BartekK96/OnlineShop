import React, { Component } from "react";

export default class CartProduct extends Component {
  render() {
    const value = this.props.value;
    const product = this.props.product;

    return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            src={product.img}
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="">{product.name}</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="">{product.price}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div className="">
              <span
                className="btn btnDecrement mx-1"
                onClick={() => {
                  value.decrement(product._id);
                }}
              >
                -
              </span>
              <span className="btn btn_count">{product.count}</span>
              <span
                className="btn btnIncrement mx-1"
                onClick={() => {
                  value.increment(product._id);
                }}
              >
                +
              </span>
            </div>
          </div>
        </div>

        
        <div className="col-10 mx-auto col-lg-2">
          <div className="" onClick={() => value.removeProduct(product._id)}>
            <i className="icon fa fa-remove" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">{product.total}</div>
      </div>
    );
  }
}
