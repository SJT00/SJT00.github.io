import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import { Helmet } from "react-helmet";
import {Container} from "react-bootstrap";
import Background from "../components/Bkgd.js";
import Navbar from "../components/Navbar.js";
import Intro from "../components/Intro.js";
import Contact from "../components/Contact.js";

export default function Home() {
  return (
    <Container fluid style={{height:"100vh"}}>
      <Helmet>
          <title>Saad Taj</title>
        </Helmet>
      <Background />
      <Navbar />
      <Intro/>
      <Contact/>
      </Container>
  );
}
