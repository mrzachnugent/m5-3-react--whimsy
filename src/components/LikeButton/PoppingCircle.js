import React from "react";
import styled, { keyframes } from "styled-components";

export const PoppingCircle = ({ color, size }) => {
  return <Wrapper size={size} color={color} />;
};

const poppingAnim = keyframes`
0% {
    transform: scale(0);
    opacity: 0;
}
99% {
    transform: scale(1);
    opacity: 0.5;
}
100% {
    transform: scale(1);
    opacity: 0;
}
`;

const Wrapper = styled.div`
  animation: ${poppingAnim} cubic-bezier(0.46, 0.23, 0.51, 0.94) 500ms forwards;
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
`;
