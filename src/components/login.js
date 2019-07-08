import React, { Component } from 'react';
import Buttom from 'react-bootstrap/Button';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    }
  }

  render() {
    return (
      <Buttom variant="inline"
              className={this.state.logged ? "fa fa-sign-out" : "fa fa-sign-in"}>
      </Buttom>
    );
  }
}

export default Login;