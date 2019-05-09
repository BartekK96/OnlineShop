import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: true,
      success: true,
      name: this.props.product.name
    };
    this.showWarning = this.showWarning.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.setName = this.setName.bind(this);
  }

  showWarning = () => {
    this.props.showWarning(this.state.warning);
  };
  showSuccess = () => {
    this.props.showSuccess(this.state.success);
  };
  setName = () => {
    this.props.setName(this.state.name);
  };
  render() {
    const { _id, name, price, img, inCart } = this.props.product;
    const addToCart = this.props.addToCart;

    return (
      <div className="col-md-3 p-2">
        <img className="card-img-top" src={img} alt="img" />
        <div className="card bg-light">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: {price}$</p>

            <button
              className="btn btn-primary"
              onClick={() => {
                if (!inCart) {
                  addToCart(_id);
                  this.setName();
                  this.showSuccess();
                } else {
                  this.setName();
                  this.showWarning();
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
