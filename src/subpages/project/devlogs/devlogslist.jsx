import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { Col, Row } from "react-bootstrap";
import "./devlogs.scss";
import Markdown from "react-markdown";

const DevLogList = () => {
  const rawData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/devlogs/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMM D,YY")
          }
          fields {
            slug
          }
          rawMarkdownBody
        }
      }
    }
  `);

  const rawNodes = rawData.allMarkdownRemark.nodes;

  function buildTree(nodes) {
    const treeData = { name: "/", children: [] };
    const docs = {};

    for (const node of nodes) {
      const slug = node.fields.slug;
      const isFolder = slug.endsWith("/");
      const parts = slug.split("/").filter(Boolean);
      let current = treeData;

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        let existing = current.children.find(child => child.name === part);

        if (!existing) {
          existing = { name: part, children: [] };
          current.children.push(existing);
        }

        const isLast = i === parts.length - 1;

        if (isLast) {
          if (!isFolder) {
            delete existing.children;
            existing.id = slug;
            docs[slug] = node.rawMarkdownBody;
          }
        }

        current = existing;
      }
    }

    return { treeData, docs };
  }

  const { treeData, docs } = buildTree(rawNodes);
  console.log("TREE: ", treeData);

  const [curDoc, setCurDoc] = useState("");

  const handleSelect = node => {
    if (!node.isBranch) {
      console.log("NODE: ", node);
      setCurDoc(node.element.id);
    }
  };

  return (
    <Row>
      <Col xs={12} sm={3}>
        <div className="directory">
          <TreeView
            data={flattenTree(treeData)}
            aria-label="directory tree"
            onNodeSelect={handleSelect}
            nodeRenderer={({
              element,
              isBranch,
              isExpanded,
              getNodeProps,
              level,
            }) => (
              <div
                {...getNodeProps()}
                key={"Tree Node: " + element.id}
                style={{ paddingLeft: 20 * (level - 1) }}
              >
                {isBranch ? (isExpanded ? "📂" : "📁") : "📝"} {element.name}
              </div>
            )}
          />
        </div>
      </Col>
      <Col
        className="mt-2 mx-2 mt-sm-0 mx-sm-0"
        style={{
          height: "500px",
          overflow: "auto",
          background: "#282a36",
        }}
      >
        <Markdown key={"Markdown Render:" + curDoc}>
          {curDoc ? docs[curDoc] : ""}
        </Markdown>
      </Col>
    </Row>
  );
};

export default DevLogList;
