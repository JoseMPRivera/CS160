import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

class HomeBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Spartan Sells</a> */}
        {/* <img src="https://i.ibb.co/VBw9f9S/Spartan-Sells-Logo-2x.png" width="60" height="60" alt="spartan-Sells"/> */}
        <img src= {require ("./image/SpartanSells.png")} width="60" height="60" alt="spartan-Sells" />
        {/*<img src="https://image.flaticon.com/icons/png/512/21/21294.png" class={""/*"img-responsive"*/}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/SellItem">Sell <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
        <Nav className="mr-auto">
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Rating">Rating</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item> */}
              <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Selling</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Configuration</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
      </nav>  
    );
  }
}

export default HomeBar;