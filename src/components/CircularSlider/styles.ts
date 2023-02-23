import styled from "styled-components";

export const CircularSliderWrapper = styled.div`
  position: absolute;
  top: 143px;
  transform: translateX(-50%);
  left: 50%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CircularSliderContainer = styled.div<{
  rotateDegree: number;
}>`
  position: relative;
  width: 530px;
  height: 530px;
  border: 1px solid var(--east-bayT);
  border-radius: 50%;
  transform-origin: 50% 50%;
  transition: transform 2s;
  transform: rotate(${(props) => props.rotateDegree}deg);

  @media (max-width: 1440px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
