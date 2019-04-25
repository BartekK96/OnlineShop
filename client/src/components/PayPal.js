import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

import { order } from "../components/UserFunctions";

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: JSON.parse(localStorage.token).user.login,
      order: this.props.cart
    };
  }

  componentWillReceiveProps(props) {
    const cart = props.cart;
    this.setState({
      order: cart
    });
  }
  render() {
    const onSuccess = payment => {
      console.log("The payment was succeeded!", payment);

      this.props.clearCart();
      this.props.history.push("/");
      order(this.state.order, this.state.login);
    };

    const onCancel = data => {
      console.log("The payment was cancelled!", data);
    };

    const onError = err => {
      console.log("Error!", err);
    };

    let env = "sandbox";
    let currency = "USD";
    let total = this.props.total;

    const client = {
      sandbox:process.env.REACT_APP_APP_ID,
      production: "YOUR-PRODUCTION-APP-ID"
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
