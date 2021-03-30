import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.scss";
import { Navbar,Nav } from "react-bootstrap";
export default function NavBar() {
  return (
    <Navbar id="navbar" expand="md">
      {/* <Navbar.Brand>
        <span>SJT</span>
      </Navbar.Brand> */}
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
