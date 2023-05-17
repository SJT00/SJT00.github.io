import * as React from "react";
import PropTypes from "prop-types";

import { Container } from "react-bootstrap";
import Background from "./bkgd.jsx";
import {Seo} from "../components/seo.jsx";
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
