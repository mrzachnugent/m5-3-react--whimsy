import React from "react";
import styled from "styled-components";

export const Stat = ({ num, action }) => {
  return (
    <StatText>
      <span>{num}</span> {action}
    </StatText>
  );
};

const StatText = styled.p`
  color: #888;
  padding-right: 25px;
  span {
    font-weight: bold;
    color: #000;
  }
`;
