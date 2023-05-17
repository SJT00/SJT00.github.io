import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../layout/layout.jsx";

export default function NotFound() {
  return (
    <Layout>
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
    </Layout>
  );
}
