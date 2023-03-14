import * as React from "react";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";
import Background from "./bkgd.jsx";
import {Seo} from "../components/seo.jsx";
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

export const Head = () => <Seo/>;

const Layout = ({ children }) => {
  return (
    <>
    <Head />
      <Container className="layoutContainer" fluid>
        <Navigation />
        <Background />
        <main>{children}</main>
        <footer>
          <p id="contact">Contact me via: saadtaj96@gmail.com</p>
        </footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
