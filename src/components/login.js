import React, { Component } from 'react';
import Buttom from 'react-bootstrap/Button';
import ReactModalLogin from 'react-modal-login';
import '../App.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      showModal: false,
      loading: false,
      error: null
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.finishLoading = this.finishLoading.bind(this);
    this.afterTabsChange = this.afterTabsChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  onLogin() {

  }

  onRegister() {

  }

  logout() {

  }

  handleLogin() {
    this.state.logged ? this.logout() : this.openModal();
  }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <Buttom variant="inline"
          className={this.state.logged ? "fa fa-sign-out" : "fa fa-sign-in"}
          onClick={this.handleLogin}>
        </Buttom>
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          form={{
            onLogin: this.onLogin.bind(this),
            onRegister: this.onRegister.bind(this),
            loginBtn: {
              label: "Iniciar Sesión"
            },
            registerBtn: {
              label: "Registrarse"
            },
            loginInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Contraseña',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'contraseña',
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: 'Email',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: 'Email',
              },
              {
                containerClass: 'RML-form-group',
                label: 'Contraseña',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: 'contraseña',
              }
            ],
          }}
        />
      </div>
    );
  }
}

export default Login;