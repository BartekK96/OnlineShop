import React, { Component } from "react";


export default class ProfilePage extends Component {
  constructor() {
    super()
    this.state = {
      login: ""
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      
      const token = localStorage.token;

      this.setState({
        id: JSON.parse(token).user.id,
        login: JSON.parse(token).user.login
      });
    }
    else{
      
      this.props.history.push('/error')
    }
  }

  render() {
    return (
      <div className="conatiner">
        <div className="jumbotron mt-">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
            <h1>{this.state.login}</h1>
            <h1>{this.state.id}</h1>
          </div>
        </div>
      </div>
    );
  }
}
