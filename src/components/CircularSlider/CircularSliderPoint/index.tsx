import React from "react";
import { useGlobalContext } from "../../../App";

import {
  CircularSliderPointContainer,
  SliderPoint,
  SliderPointIndex,
} from "./styles";

const CircularSliderPoint = ({ index }: ICircularSliderPointProps) => {
  const { onPointClick, period, degreesArray, pointDegreesArray } =
    useGlobalContext();

  const handlePointClick = () => {
    onPointClick(index);
  };

  return (
    <CircularSliderPointContainer rotateDegree={degreesArray[index]}>
      <SliderPoint
        active={period === index && true}
        onClick={handlePointClick}
      >
        <SliderPointIndex rotateDegree={pointDegreesArray[index]}>
          {index + 1}
        </SliderPointIndex>
      </SliderPoint>
    </CircularSliderPointContainer>
  );
};

export default CircularSliderPoint;
