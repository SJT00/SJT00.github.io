import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function NotFound() {//Temp layout seems to bug out other pages
  return (
    <>
      <Container fluid style={{ height: "100vh" }}>
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
                You know where the exit is...
              </h3>
            </Col>
          </Row>
        
      </Container>
    </>
  );
}