import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import "./navigation.scss";

export default function Header() {
  const testing = true;
  const Tabs = ["home", "about", "projects"]; //lowercase because of reading lowercase url
  const [curTab, setTab] = useState(-1);
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  React.useEffect(() => {
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
        if (
          url.join("/") === data.site.siteMetadata.siteUrl.concat("/") ||
          (testing && url.join("/") === "http://localhost:8000/")
        ) {
          //Hard coding for Home and other pgs, local testing exception
          setTab(0);
        } else {
          setTab(Tabs.indexOf(url[l - 2]));
        }
      }
    }
  }, []);
  return (
    <Navbar id="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className={curTab === 0 ? "bordered" : ""} href="/">
            Home
          </Nav.Link>
          <Nav.Link className={curTab === 1 ? "bordered" : ""} href="/about">
            About
          </Nav.Link>
          <Nav.Link className={curTab === 2 ? "bordered" : ""} href="/projects">
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
