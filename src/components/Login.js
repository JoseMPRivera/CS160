import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../css/Login.css';
import { faTextWidth } from '@fortawesome/free-solid-svg-icons';

export default class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    email: "",
    password: ""
  };
}

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  trackChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  render() {
    return (
      <form>
      <div>
        <ul class="nav-bar">
          <li class="b-left"><a href="/">Spartan Sell</a></li>
          <li class="b-right"><a href="#clients">Signup</a></li>  
          <li class="b-right"><a href="#contact">Login</a></li>
        </ul>	

        <div class="vl"></div>
        <div className = "Login">
          <form class="" onSubmit={this.handleSubmit}>
            <div class="form-group row">
            <label class="col-sm-3"> Email </label>
            <div class="col-sm-8">
            <FormGroup controlId="email" bsSize="small">
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.trackChange}
                />
            </FormGroup>
            </div>
            </div>
            <div class="form-group row">
            <label class="col-sm-3"> Password </label>
            <div class="col-sm-8">
            <FormGroup controlId="password" bsSize="medium">
              <FormControl
                autoFocus
                type="password"
                value={this.state.password}
                onChange={this.trackChange}
                />
            </FormGroup>
            </div>
            </div>
            <div class="form-group row">
            <div class="col-sm-11">
              <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              >
                Login
              </Button>
            </div>
            </div>
          </form>
        </div>

      </div>
      </form>
    );
  }
}