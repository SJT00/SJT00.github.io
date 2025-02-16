export const onRouteUpdate = ({ location }) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-KEMH0Y8HS6", {
        page_path: location.pathname,
      });
    }
  };
  