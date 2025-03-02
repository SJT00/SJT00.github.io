import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import TechStackDisplay from "../tabs/components/techStackDisplay";
import { cardTags } from "./cardData";

const StatusOverlay = ({ tags }) => {
  let overlayItems = [];

  if (tags.includes(cardTags.live)) {
    overlayItems.push({ icon: "🔴", name: "Live Project" });
  }
  if (tags.includes(cardTags.construction)) {
    overlayItems.push({ icon: "🛠️", name: "Under Construction" });
  }

  const overlayStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const iconStyle = {
    padding: "2px",
    aspectRatio: "1/1",
    fontSize: "1.5rem",
    marginBottom: "5px",
    cursor: "default",
    userSelect: "none",
    backgroundColor: "#f8f9fa",
    borderRadius: "100%",
  };

  return (
    <div style={overlayStyle}>
      {overlayItems.map((item, index) => (
        <OverlayTrigger
          key={item.name + index + "-trigger-overlay"}
          trigger={["hover", "focus"]}
          placement="top"
          overlay={<Tooltip>{item.name}</Tooltip>}
        >
          <div style={iconStyle}>{item.icon}</div>
        </OverlayTrigger>
      ))}
    </div>
  );
};

const ShowcaseCard = ({ card }) => {
  const { title, imgSrc, text, tools, tags } = card;
  return (
    <Card key={title + "-card"}>
      <StatusOverlay tags={tags} />
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body className="blackFont">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <TechStackDisplay tools={tools} />
      </Card.Footer>
    </Card>
  );
};

export default ShowcaseCard;
