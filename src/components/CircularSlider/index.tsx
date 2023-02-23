import React from "react";

import CircularSliderPoint from "./CircularSliderPoint";

import { CircularSliderContainer, CircularSliderWrapper } from "./styles";

import { periodYears } from "../../App/constants";

import { useGlobalContext } from "../../App";

const CircularSlider = () => {
  const { rotateDegree } = useGlobalContext();

  return (
    <CircularSliderWrapper>
      <CircularSliderContainer {...{ rotateDegree }}>
        {periodYears.map((_, index) => (
          <CircularSliderPoint
            key={index}
            {...{
              index,
            }}
          />
        ))}
      </CircularSliderContainer>
    </CircularSliderWrapper>
  );
};

export default CircularSlider;
