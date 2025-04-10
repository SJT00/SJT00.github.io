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
            date(formatString: "MMM D, YY")
          }
          fields {
            slug
          }
          rawMarkdownBody
        }
      }
    }
  `);

  const nodes = rawData.allMarkdownRemark.nodes;

  // Contains slug:post.rawMarkdownBody map
  const docs = {};

  const groupedDevLogs = nodes.reduce((groups, devlog) => {
    const slug = devlog.fields.slug;

    if (!docs[slug]) {
      docs[slug] = devlog.rawMarkdownBody;
    }

    const folder = slug.split("/")[1];

    if (!groups[folder]) {
      groups[folder] = [];
    }

    groups[folder].push(devlog);

    return groups;
  }, {});

  const folderNames = Object.keys(groupedDevLogs);

  const fileNameMapping = {
    yamans: "Yaman Barber",
    minipad: "Minipad",
  };

  const treeData = {
    name: "root",
    children: folderNames.map(fname => {
      return {
        name: fileNameMapping[fname],
        children: groupedDevLogs[fname].map(log => {
          return {
            name: log.frontmatter.date + " " + log.frontmatter.title,
            id: log.fields.slug,
          };
        }),
      };
    }),
  };

  const [curDoc, setCurDoc] = useState("");

  const handleSelect = (node, event) => {
    event?.stopPropagation();
    console.log("Selected node:", node);
    if (node.isBranch) {
      console.log("Branch clicked, no change to curDoc.");
      return;
    }
    setCurDoc(node.element.id);
    console.log("Updated curDoc:", node.element.id);
  };

  const handleExpand = node => {
    console.log("Expanded branch:", node.element);
  };

  return (
    <Row>
      <Col xs={12} sm={3}>
        <div className="directory">
          <TreeView
            data={flattenTree(treeData)}
            aria-label="directory tree"
            onSelect={handleSelect}
            onExpand={handleExpand}
            nodeRenderer={({
              element,
              isBranch,
              isExpanded,
              getNodeProps,
              level,
            }) => (
              <div
                {...getNodeProps()}
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
