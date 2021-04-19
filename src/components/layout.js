import * as React from "react";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";
import Background from "../components/bkgd.js";

import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid style={{ height: "100vh" }}>
        <Header />
        <Background />
        <main style={{ height: "90vh" }}>{children}</main>
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
