import React from "react";

import { getProduct } from "../components/UserFunctions";

export const DataContex = React.createContext();

class DataProvider extends React.Component {
  state = {
    products: [],
    cart: [],
    orderTotal: 0
    
  };

  componentDidMount() {
    getProduct().then(products => {
      this.setState({
        products: products
      });
    });
  }

  getItem = id => {
    const product = this.state.products.find(product => {
      return product._id === id;
    });

    return product;
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.count = 1;
    product.inCart = true;
    product.total = product.price * product.count;
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product],
        orderTotal: this.state.orderTotal + parseInt(product.price)
      };
    });
  };
  increment = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    if (product.count < 10) {
      product.count++;
      product.total = product.total + parseInt(product.price);
    }

    this.setState({
      cart: [...this.state.cart],
      orderTotal: this.state.orderTotal + parseInt(product.price)
    });
  };
  decrement = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    if (product.count > 0) {
      product.count--;
      product.total = product.total - parseInt(product.price);
    }

    this.setState({
      cart: [...this.state.cart],
      orderTotal: this.state.orderTotal - parseInt(product.price)
    });
  };
  removeProduct = id => {
    let tempProducts = [...this.state.cart];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = false;
    for (let i = 0; i < tempProducts.length; i++) {
      if (i === index) {
        tempProducts.splice(i, 1);
      }
    }
    this.setState({
      cart: [...tempProducts],
      orderTotal:
        this.state.orderTotal -
        parseInt(product.price) * parseInt(product.count)
    });
  };
  clearCart = () => {
    let tempProducts = [...this.state.cart];
    tempProducts.map(product => {
      return product.inCart = false;
    });
    this.setState({
      orderTotal:0,
      cart: []
    });
  };

  render() {
    return (
      <DataContex.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeProduct: this.removeProduct,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </DataContex.Provider>
    );
  }
}

const DataConsumer = DataContex.Consumer;

export { DataProvider, DataConsumer };
