import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import "./header.scss";
export default function Header(currPath) {
  const testing = true;
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const myTurn = txt => {
    //Used to highlight current pg on navbar
    if (typeof window !== "undefined") {
      //Needed for online hosting
      const url = window.location.href.split("/");
      const l = url.length;
      if (
        //Null Assertions
        data &&
        data.site &&
        data.site.siteMetadata &&
        data.site.siteMetadata.siteUrl
      ) {
        if (txt === "") {
          //Hard coding for Home and other pgs, local testing exception
          return (
            url.join("/") === data.site.siteMetadata.siteUrl ||
            (testing && url.join("/") === "http://localhost:8000/")
          );
        } else {
          return url[l - 2] === txt;
        }
      }
    }
    return false;
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
            <Nav.Link className={myTurn("") ? "bordered" : ""} href="/">
              Home
            </Nav.Link>
            <Nav.Link
              className={myTurn("about") ? "bordered" : ""}
              href="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={myTurn("projects") ? "bordered" : ""}
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
