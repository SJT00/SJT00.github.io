import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "../components/intro.js";
import Layout from "../components/layout.js";

export default function Home() {
  const testing = false;//Always set this to false before hosting
  return (
    <Layout>
      <Intro />
    </Layout>
  );
}
