import React from "react";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import "./personal.scss";
export default function Personal() {
  return (
    <Row xs={1} id="personal">
      <Col style={{ maxWidth: "800px"}}>
        <Tabs>
          <Tab eventKey="home" title="Me">
            <p>
              I am an Honours Mathematics student at the University of Waterloo,
              with experience in Computer Science.<br/>
              
              In terms of my niche within Computer Science, I prefer creating interactive applications,
              whether they be websites, games, organizational tools, or just fun
              projects to learn new technologies. In terms of hobbies, I
              thoroughly enjoy all things history, particularly concerning the
              eastern world.<br/>
              
              I am also a big fan of music, especially a mix of
              western and eastern instruments and vocals, examples including&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Coldplay"
                target="_blank"
              >
                Coldplay
              </a>
              ,&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Shafqat_Amanat_Ali"
                target="_blank"
              >
                Shafqat Amanat Ali
              </a>
              ,&nbsp;
              <a
                
                href="https://en.wikipedia.org/wiki/Strings_(band)"
              >
                Strings
              </a>
              , and&nbsp;
              <a
                
                href="https://en.wikipedia.org/wiki/A._R._Rahman"
                target="_blank"
              >
                A.R.Rahman
              </a>
              .
            </p>
          </Tab>
          <Tab eventKey="hobbies" title="Hobbies">
            N/A , please see previous tab 
          </Tab>
        </Tabs>
      </Col>
      {/* Timeline Here */}
    </Row>
  );
}
