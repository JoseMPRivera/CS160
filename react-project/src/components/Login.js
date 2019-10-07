import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../css/Login.css';
import { faTextWidth } from '@fortawesome/free-solid-svg-icons';
import { Nav, NavDropdown } from 'react-bootstrap';

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

      <form><div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src= {require ("./image/SpartanSells.png")} width="60" height="60" alt="spartan-Sells" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        <Nav className="mr-auto">
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rating</NavDropdown.Item>
              <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Selling</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Configuration</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/signUp">Sign Up</Nav.Link>
          </Nav>
      </nav>  
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
            </div>
            </div>
          </form>
        </div>
        </div>
        </form>
    );
  }
}