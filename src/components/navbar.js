import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row} from "react-bootstrap";
export default function Navbar(){
return(<Row>
    <Col>
    <h1>NavbarPlchldr</h1>
    </Col>
    <Col/>
    <Col/>
    <Col/>
    <Col/>
    <Col/>
    <Col style={{textAlign:"center"}}>
    <h1>Home</h1>
    </Col>
    <Col style={{textAlign:"center"}}>
    <h1>About</h1>
    </Col>
    <Col style={{textAlign:"center"}}>
    <h1>Projects</h1>
    </Col>
      </Row>)
}