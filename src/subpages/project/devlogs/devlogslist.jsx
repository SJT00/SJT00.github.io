import React, { useEffect, useState } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { Col, Row } from "react-bootstrap";
import { useDevLogs } from "@hooks/use-dev-logs";
import Markdown from "react-markdown";
import buildTree from "../tabs/components/fileTree";
import "./devlogs.scss";

const DevLogList = ({ id, slugId }) => {
  const { treeData, docs } = buildTree(useDevLogs());
  const [curDoc, setCurDoc] = useState();

  useEffect(() => {
    if (Object.keys(docs).includes(slugId)) {
      setCurDoc(slugId);
    }
  }, [slugId, docs]);

  const handleSelect = node => {
    if (!node.isBranch) {
      setCurDoc(node.element.id);
    }
  };

  return (
    <Row id={id}>
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
