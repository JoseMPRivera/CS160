import React, { Component } from 'react';
import '../css/Login.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import HomeBar from './HomeBar';
import Search from './Search';
import ItemsContainer from './ItemsContainer';
// import Upload from './Upload';

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
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>


      <Search />


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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<ItemsContainer/>
{/* <Upload/> */}

   </div>
    );
  }
}