import React, { useState } from "react";
import { CardGroup } from "react-bootstrap";
import ShowcaseCard from "../cards/showcaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const CardContainer = ({ currentViewing }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <CardGroup>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-container"
        cardsEffect={{ slideShadows: false }}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
        touchRatio={1.5}
        speed={600}
        style={{
          overflow: "hidden",
        }}
      >
        {currentViewing.map((cardInfo, idx) => {
          const isVisible = Math.abs(idx - activeIndex) <= 3;
          return (
            <SwiperSlide
              key={"slider :" + idx}
              style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
                transition: "opacity 0.3s ease",
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <ShowcaseCard card={cardInfo} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CardGroup>
  );
};

export default CardContainer;
