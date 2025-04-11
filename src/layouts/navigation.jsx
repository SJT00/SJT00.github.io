import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navigation.scss";

const PAGES = {
  home: { path: "/", label: "Home" },
  about: { path: "/about", label: "About" },
  projects: { path: "/projects", label: "Projects" },
};

const getPageFromUrl = () => {
  if (typeof window === "undefined") return "home";

  const pathname = window.location.pathname.toLowerCase();
  for (const [slug, { path }] of Object.entries(PAGES)) {
    if (pathname === path || pathname.startsWith(path + "/")) {
      return slug;
    }
  }

  return "home";
};

export default function Header() {
  const [curPage, setPage] = useState("home");

  // Highlight relevant page in Navbar
  useEffect(() => {
    setPage(getPageFromUrl());
  }, []);

  return (
    <Navbar id="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          {Object.entries(PAGES).map(([slug, { path, label }]) => (
            <Nav.Link
              key={slug}
              href={path}
              className={curPage === slug ? "bordered" : ""}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
