import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import Title from "../components/Title";
import Period from "../components/Period";
import Timeline from "../components/Timeline";
import Events from "../components/Events";
import CircularSlider from "../components/CircularSlider";
import SmallSlider from "../components/SmallSlider";

import { getDegreesArray } from "./utils";

import { circularSliderText, periodYears } from "./constants";

import { IAppContext } from "./types";

import { Wrapper, XLine, YLine } from "./styles";
import { CircularSliderText } from "./styles";

const AppContext = createContext<IAppContext | null>(null);

export const useGlobalContext = () =>
  useContext(AppContext) as IAppContext;

const App = () => {
  const [period, setPeriod] = useState(0);

  const [rotateDegree, setRotateDegree] = useState(0);

  const degreesArray = useMemo(
    () => getDegreesArray(periodYears.length),
    []
  );

  const [pointDegreesArray, setPointDegreesArray] = useState(
    degreesArray.map((item) => -item)
  );

  const onPointClick = (index: number) => {
    setPeriod(index);
  };

  useEffect(() => {
    setPointDegreesArray(degreesArray.map((item) => 60 * period - item));

    setRotateDegree(-(period * (360 / periodYears.length)));
  }, [period]);

  return (
    <AppContext.Provider
      value={{
        onPointClick,
        period,
        degreesArray,
        pointDegreesArray,
        rotateDegree,
      }}
    >
      <Wrapper>
        <YLine />

        <XLine />

        <Title />

        {<CircularSlider />}

        <CircularSliderText>
          {circularSliderText[period]}
        </CircularSliderText>

        <Period />

        <Timeline />

        <Events />

        <SmallSlider />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default App;
