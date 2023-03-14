import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IndexSubpg from "../subpages/Index/indexSubpg.jsx";
import Layout from "../components/layout.jsx";

export default function Home() {
  return (
    <Layout>
      <IndexSubpg />
    </Layout>
  );
}
