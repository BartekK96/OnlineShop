import React, { Component } from "react";

export default class CartProduct extends Component {
  render() {
    const value = this.props.value;
    const product = this.props.product;

    return (
      <div className="row my-2 align-items-center text-capitalize text-center bg-light">
        <div className="col-10 mx-auto col-lg-2">
          <img
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            src={product.img}
            alt="img"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          {product.name}
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <p className="d-lg-none">price:</p>
          {product.price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">
            <div className="">
              <p className="d-lg-none">quantity:</p>
              <ul className="pagination">
                <li
                  className="page-item btn btnDecrement mx-1"
                  onClick={() => {
                    value.decrement(product._id);
                  }}
                >
                  -
                </li>
                <li className="page-item btn btn_count">{product.count}</li>
                <li
                  className=" page-item btn btnIncrement mx-1"
                  onClick={() => {
                    value.increment(product._id);
                  }}
                >
                  +
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <div className="" onClick={() => value.removeProduct(product._id)}>
            <p className="d-lg-none">remove</p>
            <i className="icon fa fa-remove" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <p className="d-lg-none">Total price:</p>
          {product.total}
        </div>
      </div>
    );
  }
}
