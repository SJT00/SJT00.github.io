import { useEffect, useRef } from "react";

export const useScrollParam = (injectParam, dontScroll) => {
  const lastHashRef = useRef(null);

  useEffect(() => {
    const { hash } = window.location;

    if (!hash || !hash.includes(":")) return;

    if (hash === lastHashRef.current) return;
    lastHashRef.current = hash;

    const cleanHash = decodeURIComponent(hash).slice(1);
    const [id, param] = cleanHash.split(":");

    const el = document.getElementById(id);
    if (el) {
      !dontScroll &&
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });

      injectParam?.(id, param);
    }
  }, [injectParam, dontScroll]);
};
