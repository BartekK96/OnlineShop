import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import MyCartPage from "./pages/MyCartPage";

import Navbar from "./components/Navbar";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/mycart" exact component={MyCartPage} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
