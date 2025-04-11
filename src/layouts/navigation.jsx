import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navigation.scss";

export default function Header() {
  const [curPage, setPage] = useState();

  const pages = {
    home: "home",
    about: "about",
    projects: "projects",
  };

  const handleChange = newPage => {
    if (Object.values(pages).includes(newPage)) {
      setPage(newPage);
    }
  };

  // Highlight relevant page in Navbar
  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentUrl = new URL(window.location.href);
    const pathname = currentUrl.pathname;
    const segmentedPath = pathname.split("/").filter(Boolean);
    const slug = pathname === "/" ? "home" : segmentedPath.pop();
    if (segmentedPath.length === 0) {
      handleChange(slug);
    }
  }, []);

  return (
    <Navbar id="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          <Nav.Link
            className={curPage === pages.home ? "bordered" : ""}
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={curPage === pages.about ? "bordered" : ""}
            href="/about"
          >
            About
          </Nav.Link>
          <Nav.Link
            className={curPage === pages.projects ? "bordered" : ""}
            href="/projects"
          >
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
