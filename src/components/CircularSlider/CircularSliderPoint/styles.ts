import styled from "styled-components";

export const CircularSliderPointContainer = styled.div<{
  rotateDegree: number;
}>`
  width: 450px;
  height: 450px;
  top: 40px;
  left: 40px;
  transform-origin: 50% 50%;
  position: absolute;
  transform: rotate(${(props) => props.rotateDegree}deg);

  @media (max-width: 1440px) {
    width: 300px;
    height: 300px;
    top: 50px;
    left: 50px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const SliderPoint = styled.div<{ active: boolean }>`
  width: 56px;
  height: 56px;
  position: absolute;
  top: -68px;
  left: 198px;
  border: 1px solid rgba(48, 62, 88, 0.5);
  display: flex;
  align-items: center;
  border-radius: 50%;
  background: var(--east-bay);
  transform: scale(0.15);
  transition-duration: .5s;
  cursor: pointer;
  z-index: 10;
  
  ${(props) =>
    props.active &&
    `
  background: var(--whisper);
  transform: unset;
  `}

  :hover {
    background: var(--whisper);
    transform: unset;
  }

  @media (max-width: 1440px) {
      width: 45px;
      height: 45px;
      top: -72px;
      left: 124px;
    }

    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
      top: -68px;
      left: 82px;
    }
}`;

export const SliderPointIndex = styled.div<{ rotateDegree: number }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  transform-origin: 50% 50%;
  text-align: center;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 55px;
  transform: rotate(${(props) => props.rotateDegree}deg);

  @media (max-width: 1440px) {
    width: 45px;
    height: 45px;
    line-height: 45px;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
    line-height: 35px;
  }
`;
