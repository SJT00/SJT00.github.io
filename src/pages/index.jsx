import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "../components/intro.jsx";
import Layout from "../components/layout.jsx";

export default function Home() {
  return (
    <Layout>
      <Intro />
    </Layout>
  );
}
