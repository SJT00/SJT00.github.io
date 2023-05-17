import * as React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {Seo} from "./seo.jsx";

import Background from "./bkgd.jsx";
import Navigation from "./navigation";
import "./layout.scss";

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
