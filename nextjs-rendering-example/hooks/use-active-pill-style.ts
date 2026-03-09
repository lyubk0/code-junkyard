import React from "react";

export function useActivePillStyle<T extends HTMLElement>() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [activePillStyle, setActivePillStyle] = React.useState({});
  const featureRefs = React.useRef<(T | null)[]>([]);

  React.useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = featureRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetTop, offsetHeight, offsetWidth, offsetLeft } =
          hoveredElement;
        setActivePillStyle({
          top: `${offsetTop}px`,
          left: `${offsetLeft}px`,
          height: `${offsetHeight}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  return { activePillStyle, setHoveredIndex, featureRefs };
}
