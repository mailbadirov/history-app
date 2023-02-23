import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { useGlobalContext } from "../../App";

import { periodYears } from "../../App/constants";

import { PeriodContainer, Year } from "./styles";

const Period = () => {
  const { period } = useGlobalContext();

  const [yearTo, setYearTo] = React.useState({ value: 0 });

  const [yearFrom, setYearFrom] = React.useState({ value: 0 });

  const lastPeriod = useRef(0);

  useLayoutEffect(() => {
    const fromTarget = {
      value: periodYears[lastPeriod.current][0],
    };

    gsap.to(fromTarget, {
      duration: 1,
      value: periodYears[period][0],
      roundProps: "value",
      ease: "none",
      onUpdate() {
        setYearTo({ value: fromTarget.value });
      },
    });

    const toTarget = {
      value: periodYears[lastPeriod.current][1],
    };

    gsap.to(toTarget, {
      duration: 1,
      value: periodYears[period][1],
      roundProps: "value",
      ease: "none",
      onUpdate() {
        setYearFrom({ value: toTarget.value });
      },
    });

    return () => {
      lastPeriod.current = period;
    };
  }, [period]);

  return (
    <PeriodContainer>
      <Year diffColor={true}>{yearTo.value}</Year>

      <Year>{yearFrom.value}</Year>
    </PeriodContainer>
  );
};

export default Period;
