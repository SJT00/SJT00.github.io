import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectsSubpg from "../subpages/project/projectsSubpg.jsx";
import Layout from "../components/layout.jsx";

export default function ProjectPg() {
  return (
    <Layout>
      <ProjectsSubpg />
    </Layout>
  );
}
