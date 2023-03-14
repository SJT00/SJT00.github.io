import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutSubpg from "../subpages/about/aboutSubpg.jsx";
import Layout from "../components/layout.jsx";

export default function AboutPg() {
  return (
    <Layout>
      <AboutSubpg />
    </Layout>
  );
}
