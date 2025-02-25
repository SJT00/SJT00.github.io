import React, { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";

import Budgie from "./budgie";
import Token from "./token";
import SpaceInvaders from "./spaceInvaders";
import FlashFightingGame from "./flashFightingGame";

const CardContainer = ({ curTab }) => {
  const [isBelowMd, setIsBelowMd] = useState(window.innerWidth < 768);
  const [currentViewing, setCurrentViewing] = useState();

  const fullStack = ["Budgie", "Token"];
  const learning = ["SpaceInvaders", "FlashFightingGame"];

  const projMappings = {
    Budgie: <Budgie key={"Budgie Card"} />,
    Token: <Token key={"Token Card"} />,
    SpaceInvaders: <SpaceInvaders key={"SpaceInvaders Card"} />,
    FlashFightingGame: <FlashFightingGame key={"FlashFightingGame Card"} />,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsBelowMd(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (curTab === 0) {
      setCurrentViewing(fullStack);
    } else if (curTab === 1) {
      setCurrentViewing(learning);
    } else {
      setCurrentViewing([...fullStack, ...learning]);
    }
  }, [curTab]);

  return (
    <CardGroup>
      {currentViewing?.map(curr => {
        return projMappings[curr];
      })}
      {/* <Budgie />
      <Token />
      <SpaceInvaders />
      <FlashFightingGame /> */}
    </CardGroup>
  );
};

export default CardContainer;
