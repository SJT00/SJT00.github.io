import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Nav } from "react-bootstrap";
export default function NavBar() {
  return (
    <Navbar id="navbar" expand="md">
      {/* <Navbar.Brand>
        <span>SJT</span>
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
          <Nav.Link>Hobbies</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
