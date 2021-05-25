import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../components/layout.js";

export default function NotFound() {
  //Temp layout seems to bug out other pages
  return (
    <Layout>
      {/* <Container fluid style={{ height: "100vh" }}> */}
      <Row
        style={{
          height: "60vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col style={{ textAlign: "center" }}>
          <h3>
            What the!!! how did you get here?
            <br />
            <br />
            You know where the exit is... ↗️
          </h3>
        </Col>
      </Row>
      {/* </Container> */}
    </Layout>
  );
}
