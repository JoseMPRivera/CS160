import React, { Component } from 'react';
import '../css/Login.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import HomeBar from './HomeBar';
import Search from './Search';
import ItemsContainer from './ItemsContainer';

export default class HomePage extends Component {
  render() {
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

  <div class ="carousel-homepage">
  <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require ("./image/carousel1.jpg")}
      height="300"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Play Station 4</h3>
      <p>Fortnite Neo Versa PS4™ Bundle</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require ("./image/carousel2.jpg")}
      height="300"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require ("./image/carousel3.jpg")}
      height="300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Xiaomi</h3>
      <p>Xiaomi Mi M365 Electric Scooter.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<ItemsContainer/>

   </div>
    );
  }
}