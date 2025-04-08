import React from "react";
import yamanBarberImg from "@images/Cards/YamanBarber/YamanBarber.png";
import wSiteImg from "@images/Cards/WeddingWebsite/WeddingWebsite.png";
import vCSImg from "@images/Cards/VCS.png";
import minipadImg from "@images/Cards/Minipad.png";
import sInvadersImg from "@images/Cards/S_Invaders.png";
import flashGameImg from "@images/Cards/N_Battle.png";

export const cardTags = {
  fullStack: "fullStack",
  learning: "learning",
  live: "live",
  construction: "construction",
};

const YamanBarber = {
  title: "Barber Booking",
  imgSrc: yamanBarberImg,
  text: (
    <>
      A custom website and booking service for my local barbershop, built
      full-stack with Next.js, Supabase for storage, and hosted on Cloudflare.
      <br />
      <br />
      <small
        style={{
          fontSize: "0.8em",
          color: "#666",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Customers can book available timeslots, select services, while barbers
        can view
      </small>
    </>
  ),
  tools: ["NextJS", "MUI", "PostgreSQL"],
  tags: [cardTags.fullStack, cardTags.live, cardTags.construction],
};

const vCS = {
  title: "Virtual Creator Studio",
  imgSrc: vCSImg,
  text: (
    <>
      A virtual event creation platform that enables hosts to design interactive
      events and attendees to engage seamlessly. <br />
      <small
        style={{
          fontSize: "10px",
          color: "#666",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        This platform was developed as part of my work with TK Events and
        remains their intellectual property.
      </small>
    </>
  ),
  tools: ["AWS", "NextJS", "MUI", "PostgreSQL"],
  tags: [cardTags.fullStack, cardTags.live],
};

const WeddingWebsite = {
  title: "Wedding Website",
  imgSrc: wSiteImg,
  text: (
    <>
      My wedding's registration and RSVP portal for 500+ guests, built
      full-stack with Next.js, Supabase for storage, and hosted on Vercel.
      <br />
      <br />
      <small
        style={{
          fontSize: "0.8em",
          color: "#666",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Guests can log in, manage plus ones, send notes, and receive email
        confirmations.
      </small>
    </>
  ),
  tools: ["NextJS", "MUI", "PostgreSQL"],
  tags: [cardTags.fullStack, cardTags.live],
};

const minipad = {
  title: "Minipad",
  imgSrc: minipadImg,
  text: (
    <>A custom text editor to help me learn C++, OpenGL and piece tables.</>
  ),
  tools: ["CPP", "OpenGL", "Git"],
  tags: [cardTags.learning, cardTags.construction],
};

const spaceInvaders = {
  title: "Space Invaders",
  imgSrc: sInvadersImg,
  text: (
    <>
      A Space Invader clone I made using python and its library pygame. Can be
      played with a keyboard, as well as a custom controller.
    </>
  ),
  tools: ["Python", "Pygame", "Git"],
  tags: [cardTags.learning],
};

const flashFightingGame = {
  title: "Flash Fighting Game",
  imgSrc: flashGameImg,
  text: (
    <>
      A Fighting Game Demo I made using Adobe Flash, and it's scripting language
      Actionscript.
    </>
  ),
  tools: ["Actionscript"],
  tags: [cardTags.learning],
};

const cardsInfo = [
  YamanBarber,
  WeddingWebsite,
  vCS,
  minipad,
  spaceInvaders,
  flashFightingGame,
];
export default cardsInfo;
