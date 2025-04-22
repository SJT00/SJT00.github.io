import { useEffect, useRef } from "react";

// Scrolls to id in hash, updates injectParam[sameId] with slug after ":"
export const useScrollParam = (injectParam, dontScroll) => {
  const lastHashRef = useRef(null);

  useEffect(() => {
    const { hash } = window.location;

    if (!hash || !hash.includes(":")) return;

    if (hash === lastHashRef.current) return;
    lastHashRef.current = hash;

    const cleanHash = decodeURIComponent(hash).slice(1);
    const [id, param] = cleanHash.split(":");
    const lowerCasedId = id.toLowerCase();

    const el = document.getElementById(lowerCasedId);
    if (el) {
      !dontScroll &&
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }, 100);
      injectParam?.(lowerCasedId.toLowerCase(), param);
    }
  }, [injectParam, dontScroll]);
};
