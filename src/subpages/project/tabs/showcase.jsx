import React, { useState } from "react";
import { Row, ButtonGroup, Button } from "react-bootstrap";
import cardData, { cardTags } from "./components/cards/cardData";
import CardContainer from "./components/cards/cardContainer";

export default function Showcase() {
  const cardCategories = ["🌐 Full Stack", "🔬 Learning", "🗂️ All"];
  const [activeCat, setActiveCat] = useState(0);

  let tagMap = new Map();

  cardData.forEach(card => {
    card.tags.forEach(tag => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, []);
      }
      tagMap.get(tag).push(card);
    });
  });

  const getRelevantCards = currCat => {
    if (currCat === 0) {
      return tagMap.get(cardTags.fullStack);
    } else if (currCat === 1) {
      return tagMap.get(cardTags.learning);
    } else {
      return [
        ...tagMap.get(cardTags.fullStack),
        ...tagMap.get(cardTags.learning),
      ];
    }
  };

  return (
    <>
      <Row style={{ justifySelf: "center" }}>
        <ButtonGroup
          aria-label="Project Categories"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {cardCategories.map((cat, idx) => (
            <Button
              key={"category button # " + idx}
              variant={"outline-light"}
              active={activeCat === idx}
              onClick={() => {
                setActiveCat(idx);
              }}
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContainer currentViewing={getRelevantCards(activeCat)} />
        <p
          style={{
            marginTop: "5px",
          }}
        >
          These are some of the projects I've worked on—ranging from personal
          experiments to enterprise-level products.
        </p>
      </Row>
    </>
  );
}
