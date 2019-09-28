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
      <div>
        <ul class="nav-bar">
          <li class="b-left"><a href="#home">Spartan Sell</a></li>
          <li class="b-right"><a href="#clients">Signup</a></li>  
          <li class="b-right"><a href="#contact">Login</a></li>
        </ul>	

        <div class="vl"></div>
        <div className = "Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="small">
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.trackChange}
                />
            </FormGroup>

            <FormGroup controlId="password" bsSize="medium">
              <FormControl
                autoFocus
                type="password"
                value={this.state.password}
                onChange={this.trackChange}
                />
            </FormGroup>

            <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          </form>
        </div>

      </div>
    );
  }
}