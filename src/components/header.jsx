import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      
      <div>
        <Navbar style={{ backgroundColor: "Green" }} color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            <h1
              style={{
                fontFamily: "Times New Roman",
                fontWeight: "bold",
                color: "white"
              }}
            >
              Go Food
            </h1>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
