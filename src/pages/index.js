import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "../components/intro.js";
import Layout from "../components/layout.js";

export default function Home() {
  return (
    <Layout>
      <Intro />
    </Layout>
  );
}
