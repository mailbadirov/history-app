import React from "react";

import { useGlobalContext } from "../../App";
import { periodYears } from "../../App/constants";

import { SmallPoint, SmallSliderContainer } from "./styles";

const SmallSlider = () => {
  const { period, onPointClick } = useGlobalContext();

  const handleClick = (index: number) => () => {
    onPointClick(index);
  };

  return (
    <SmallSliderContainer>
      {periodYears.map((_, index) => (
        <SmallPoint
          onClick={handleClick(index)}
          key={index}
          active={period === index && true}
        ></SmallPoint>
      ))}
    </SmallSliderContainer>
  );
};

export default SmallSlider;
