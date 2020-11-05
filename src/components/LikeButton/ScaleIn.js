import React from "react";
import { useSpring, animated } from "react-spring";

export const ScaleIn = ({ children }) => {
  const style = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 1200,
      friction: 30,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};
