// Courtesy of Claude
import React, { useEffect, useState, useRef, useCallback } from "react";

const StarBackground = () => {
  const [dimensions, setDimensions] = useState(
    typeof window !== "undefined"
      ? {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      : {
          width: 0,
          height: 0,
        }
  );

  // Canvas refs
  const smallStarsRef = useRef(null);
  const mediumStarsRef = useRef(null);
  const largeStarsRef = useRef(null);

  // Animation positions
  const smallStarsPos = useRef(0);
  const mediumStarsPos = useRef(0);
  const largeStarsPos = useRef(0);

  // Generate star data based on screen dimensions
  const generateStarData = useCallback(() => {
    const { width, height } = dimensions;
    const starColor =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--customwhite"
      ) || "#ffffff";

    // Determine star counts based on screen dimensions
    let smallCount, mediumCount, largeCount;

    if (width == 0) {
      smallCount = 0;
      mediumCount = 0;
      largeCount = 0;
    } else if (width <= 720) {
      smallCount = 300;
      mediumCount = 90;
      largeCount = 40;
    } else if (width <= 1280) {
      smallCount = 500;
      mediumCount = 130;
      largeCount = 50;
    } else if (width <= 1920) {
      smallCount = 700;
      mediumCount = 200;
      largeCount = 100;
    } else {
      smallCount = 1400;
      mediumCount = 400;
      largeCount = 200;
    }

    // Generate star coordinates
    const generateStars = count => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 2, // Double height for seamless scrolling
          color: starColor,
        });
      }
      return stars;
    };

    return {
      small: generateStars(smallCount),
      medium: generateStars(mediumCount),
      large: generateStars(largeCount),
    };
  }, [dimensions]);

  // Setup canvas with dimensions
  const setupCanvas = useCallback(
    (canvas, stars, size) => {
      if (!canvas) return;

      const { width, height } = dimensions;
      canvas.width = width;
      canvas.height = height;

      // Initial draw
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);

      // Draw each star
      stars.forEach(star => {
        ctx.fillStyle = star.color;
        ctx.fillRect(star.x, star.y, size, size);
      });
    },
    [dimensions]
  );

  // Animate stars with requestAnimationFrame for smoother performance
  const animateStars = useCallback(
    (canvas, stars, size, speed, posRef) => {
      if (!canvas) return null;

      const { width, height } = dimensions;
      const ctx = canvas.getContext("2d");

      const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // Update position
        posRef.current += speed;
        if (posRef.current >= height) {
          posRef.current = 0;
        }

        // Draw stars with wrap-around logic
        stars.forEach(star => {
          ctx.fillStyle = star.color;

          // Calculate wrapped position
          let yPos = (star.y - posRef.current) % (height * 2);
          if (yPos < 0) yPos += height * 2;

          // Draw star - if it's in view
          if (yPos < height) {
            ctx.fillRect(star.x, yPos, size, size);
          }

          // Draw wrapped duplicate if needed for seamless scrolling
          if (yPos > height && yPos < height * 2) {
            ctx.fillRect(star.x, yPos - height * 2, size, size);
          }
        });

        // Continue animation
        return requestAnimationFrame(animate);
      };

      // Start animation and return the animation frame ID
      return requestAnimationFrame(animate);
    },
    [dimensions]
  );

  // Handle resize event with debouncing
  useEffect(() => {
    if (typeof window === "undefined") return;
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 250); // Debounce for performance
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate stars when dimensions change
  useEffect(() => {
    // Generate new stars
    const starData = generateStarData();

    // Set up canvases
    setupCanvas(smallStarsRef.current, starData.small, 1);
    setupCanvas(mediumStarsRef.current, starData.medium, 2);
    setupCanvas(largeStarsRef.current, starData.large, 3);

    // Start animations and store the returned animation frame IDs
    const smallStarsAnimId = animateStars(
      smallStarsRef.current,
      starData.small,
      1,
      0.3,
      smallStarsPos
    );
    const mediumStarsAnimId = animateStars(
      mediumStarsRef.current,
      starData.medium,
      2,
      0.2,
      mediumStarsPos
    );
    const largeStarsAnimId = animateStars(
      largeStarsRef.current,
      starData.large,
      3,
      0.1,
      largeStarsPos
    );

    // Cleanup animations on unmount or dimension change
    return () => {
      // Use the locally captured IDs from this render cycle
      if (smallStarsAnimId) cancelAnimationFrame(smallStarsAnimId);
      if (mediumStarsAnimId) cancelAnimationFrame(mediumStarsAnimId);
      if (largeStarsAnimId) cancelAnimationFrame(largeStarsAnimId);
    };
  }, [dimensions, generateStarData, setupCanvas, animateStars]); // Include all dependencies

  if (typeof window === "undefined") return;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        background: "transparent",
        pointerEvents: "none", // Don't capture mouse events
      }}
    >
      <canvas
        ref={smallStarsRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      />
      <canvas
        ref={mediumStarsRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      />
      <canvas
        ref={largeStarsRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      />
    </div>
  );
};

export default StarBackground;
