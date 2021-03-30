import * as React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./header.scss";

const Header = () => (
  <header
  >
    <Helmet>
          <title>{"Saad Taj"}</title>
        </Helmet>
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
  </header>
)

export default Header
