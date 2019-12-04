import React, { Component } from 'react';
import '../css/SignUp.css';
import { Button, FormGroup, FormControl, Nav, NavDropdown } from "react-bootstrap";
import HomeBar from './HomeBar'
import axios from 'axios';

export default class signUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "" ,
      email: "",
      city: "",
      password: "",
      address: "",
      zipcode: ""

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
    const {first_name, last_name, email, city, password, address, zipcode} = this.state;
    event.preventDefault();
    axios.post(
      '/register',
      {first_name, last_name, email, city,password, address, zip: zipcode}
    ).then(res => {
      console.log('registered')
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <form><div>
          <HomeBar />
      </div>
        {/* <div class="vl"></div> */}
        <div className = "SignUp">
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
                type="pass"
                value={this.state.password}
                onChange={this.trackChange}
                />
            </FormGroup>
            </div>
            </div>
            <div class="form-group row">
            <label class="col-sm-3"> First Name </label>
            <div class="col-sm-8">
            <FormGroup controlId="first_name" bsSize="medium">
              <FormControl
                autoFocus
                type="first_name"
                value={this.state.first_name}
                onChange={this.trackChange}
                />
            </FormGroup>
            </div>
            </div>

            <div class="form-group row">
            <label class="col-sm-3"> Last Name </label>
            <div class="col-sm-8">
            <FormGroup controlId="last_name" bsSize="medium">
              <FormControl
                autoFocus
                type="last_name"
                value={this.state.last_name}
                onChange={this.trackChange}
                />
            </FormGroup>
            </div>
            </div>

            <div class="form-group row">
            <label class="col-sm-3"> Address </label>
            <div class="col-sm-8">
            <FormGroup controlId="address" bsSize="medium">
              <FormControl
                autoFocus
                type="address"
                value={this.state.address}
                onChange={this.trackChange}
                />
            </FormGroup>
            </div>
            </div>


            <div class="form-group row">
            <label class="col-sm-3"> City </label>
            <div class="col-sm-8">
            <FormGroup controlId="city" bsSize="medium">
              <FormControl
                autoFocus
                type="city"
                value={this.state.city}
                onChange={this.trackChange}
                />
            </FormGroup>
            </div>
            </div>


            <div class="form-group row">
            <label class="col-sm-3"> Zipcode </label>
            <div class="col-sm-8">
            <FormGroup controlId="zipcode" bsSize="medium">
              <FormControl
                autoFocus
                type="zipcode"
                value={this.state.zipcode}
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
              type="submit"
              >
                Sign Up
              </Button>
            </div>
            </div>
          </form>
        </div>
        </form>
        );
  }
}