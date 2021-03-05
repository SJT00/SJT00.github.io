import React from "react"
import "../styles/global.scss"
import "../styles/starrynight.scss"
import { Container } from "react-bootstrap"

export default function Home() {
  return (
    <Container fluid={true}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <h1>Salam!</h1>
    </Container>
  )
}
