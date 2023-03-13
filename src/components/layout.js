import * as React from "react";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";
import Background from "../components/bkgd.js";
import Navigation from "./navigation";
import "./layout.scss";

// Code Excerpt from https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// Avoids addressbar scrolling on mobile
if (typeof window !== "undefined") {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`); //Use custom vh setting for styling
  window.addEventListener("resize", () => {
    // React to resizing
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

export const Head = () => <title>{"Saad Taj"}</title>;

const Layout = ({ children }) => {
  return (
    <>
      <Container className="layoutContainer" fluid>
        <Head />
        <Navigation />
        <Background />
        <main>{children}</main>
        <footer>
          <p id="contact">Contact me via: sjahanze@uwaterloo.ca</p>
        </footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
