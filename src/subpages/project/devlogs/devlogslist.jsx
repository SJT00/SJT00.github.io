import React, { useEffect, useState, useRef, useMemo } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { Col, Row } from "react-bootstrap";
import { useDevLogs } from "@hooks/use-dev-logs";
import Markdown from "react-markdown";
import buildTree from "../tabs/components/fileTree";
import "./devlogs.scss";

const getAllParentIds = (flatData, id, acc = []) => {
  const node = flatData.find(n => n.id === id);
  if (!node || !node.parent) return acc;
  return getAllParentIds(flatData, node.parent, [node.parent, ...acc]);
};

const DevLogList = ({ injectId, slugId }) => {
  const { treeData, docs } = buildTree(useDevLogs());
  const [curDoc, setCurDoc] = useState();
  const [expandedIds, setExpandedIds] = useState([]);
  const initialLoadRef = useRef(false);

  const flatTree = useMemo(() => flattenTree(treeData), [treeData]);

  const selectNode = (id, pushToHistory = false) => {
    setCurDoc(prev => (prev === id ? prev : id));
    const parentIds = getAllParentIds(flatTree, id);
    setExpandedIds(prev => Array.from(new Set([...prev, ...parentIds])));
    if (pushToHistory && typeof window !== "undefined") {
      window.history.pushState(null, "", `#${injectId + ":" + id}`);
    }
  };

  useEffect(() => {
    if (!initialLoadRef.current && Object.keys(docs).includes(slugId)) {
      selectNode(slugId);
      initialLoadRef.current = true;
    }
  }, [slugId, docs, flatTree]);

  const handleSelect = node => {
    if (!node.isBranch) {
      selectNode(node.element.id, true);
    }
  };

  return (
    <Row
      id={injectId}
      style={{
        height: "500px",
        overflow: "hidden",
      }}
    >
      <Col xs={12} sm={3}>
        <div
          className="directory"
          style={{ maxHeight: "500px", overflow: "auto" }}
        >
          <TreeView
            data={flatTree}
            aria-label="directory tree"
            onNodeSelect={handleSelect}
            selectedIds={[curDoc]}
            expandedIds={expandedIds}
            onExpandToggle={(id, isExpanded) => {
              setExpandedIds(prev =>
                isExpanded ? [...prev, id] : prev.filter(e => e !== id)
              );
            }}
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
          paddingTop: "10px",
          paddingBottom: "10px",
          overflow: "auto",
          background: "#22242a",
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
