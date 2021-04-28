import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./header.scss";

export default function Header() {
  const myTurn = txt => {//Used to highlight current pg on navbar
    const url = document.URL.split("/");
    return txt===url[url.length-1];
  };
  return (
    <header>
      <Helmet>
        <title>{"Saad Taj"}</title>
      </Helmet>
      <Navbar id="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={myTurn('') ? "bordered" : ""} href="/">
              Home
            </Nav.Link>
            <Nav.Link
              className={myTurn('about') ? "bordered" : ""}
              href="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={myTurn('projects') ? "bordered" : ""}
              href="/projects"
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
