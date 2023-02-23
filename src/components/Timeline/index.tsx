import React from "react";
import { useGlobalContext } from "../../App";

import { periodYears } from "../../App/constants";
import { ButtonArrow } from "../../App/styles";

import {
  CurrentPeriod,
  PeriodSlideButtonsBlock,
  SlideButton,
  TimelineContainer,
} from "./styles";

const Timeline = () => {
  const { onPointClick, period } = useGlobalContext();

  const handlePreviousPeriodClick = () => {
    onPointClick(period - 1);
  };

  const handleNextPeriodClick = () => {
    onPointClick(period + 1);
  };

  return (
    <TimelineContainer>
      <CurrentPeriod>
        0{period + 1}/0{periodYears.length}
      </CurrentPeriod>

      <PeriodSlideButtonsBlock>
        <SlideButton
          disabled={!period}
          onClick={handlePreviousPeriodClick}
        >
          <ButtonArrow left={true} />
        </SlideButton>

        <SlideButton
          disabled={period === periodYears.length - 1}
          onClick={handleNextPeriodClick}
        >
          <ButtonArrow />
        </SlideButton>
      </PeriodSlideButtonsBlock>
    </TimelineContainer>
  );
};

export default Timeline;
