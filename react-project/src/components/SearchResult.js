import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import HomeBar from './HomeBar';
import Search from './Search';

export default class SearchResult extends Component {

  state = {
    result: {}
  }

  // componentDidMount() {
  //   this.setState({ result: this.props.location.state.result }, console.log('result = ' + this.state.result))
  // }

  render() {
    const {result} = this.props.location.state
    return (
      <div>
        <HomeBar />
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Spartan Sells</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form   inline>
              <Search />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {/* <label> 
          name: {result.name} <br />
          description: {result.description} <br />
          price: ${result.price} 
        </label> */}

        <div class="seeItem">
          <h1>{result.name} </h1>
        <div class="searchImageOuter">
        <div class="searchImage">
          <img src={'/itemImages/' + result.pic} class="imageBox" alt="Item" width="400" height="350"/>
        </div>
        <div>
        <div class="searchInfo">
          <h3 >Description: {result.description} </h3>
          <h3> </h3>
          <h3>Price: ${result.price} </h3>
        </div>
        <div class="sellerInfo">
          <h3 >Seller:  {result.seller_name} </h3>
          <h3 >Email:  {result.seller_email} </h3>
        </div>
        
        </div>
        </div>
        </div>


      </div>
    );
  }
}