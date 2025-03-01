import React from "react";
import { CardGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import ShowcaseCard from "../cards/showcaseCard";

const CardContainer = ({ currentViewing }) => {
  return (
    <CardGroup>
      {currentViewing.map(cardInfo => (
        <ShowcaseCard card={cardInfo} />
      ))}
    </CardGroup>
  );
};

export default CardContainer;
