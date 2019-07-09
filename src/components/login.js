import React, { Component } from 'react';
import Buttom from 'react-bootstrap/Button';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      showModal: false,
      loading: false,
      error: null
    }
  }

  openModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
  }

  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }

  startLoading() {
    this.setState({
      loading: true
    });
  }

  finishLoading() {
    this.setState({
      loading: false
    });
  }

  afterTabsChange() {
    this.setState({
      error: null
    });
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