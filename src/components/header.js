import * as React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./header.scss";

export default function Header(){
  return(
  <header>
    <Helmet>
          <title>{"Saad Taj"}</title>
        </Helmet>
    <Navbar id="navbar" expand="md">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/hobbies">Hobbies</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
  );
}