import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../css/Login.css';
import { faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavDropdown } from 'react-bootstrap';
import HomeBar from './HomeBar';
import axios from 'axios';
const jwt = require('jsonwebtoken');


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
    const {email, password} = this.state;
    event.preventDefault();
    axios.post(
      '/login',
      { email,password}
    ).then(res => {
      const token = res.headers["x-auth-token"];
      console.log(token)
      sessionStorage.setItem('authtoken', token);
      const decoded = jwt.decode(token);
      const {user_id, first_name, last_name, email} = decoded;
      console.log(decoded);
      sessionStorage.setItem('id', user_id);
      sessionStorage.setItem('first_name', first_name);
      sessionStorage.setItem('last_name', last_name);
      sessionStorage.setItem('email', email);
      console.log('logged in')
      this.props.history.push('/')
    })
    .catch(err => console.log(err));

  }
  render() {
    return (

      <form><div>
      <HomeBar />
    </div>


      <div>
        {/* <div class="vl"></div> */}
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
              <br></br>
              Don't have an account? Click 
              <a href="/signUp">
               {' '} here
             </a>

            </div>
            </div>
          </form>
        </div>
        </div>
        </form>
    );
  }
}