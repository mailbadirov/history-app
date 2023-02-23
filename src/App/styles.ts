import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  border-left: 1px solid var(--east-bayT);
  border-right: 1px solid var(--east-bayT);

  @media (max-width: 1200px) {
    border-left: none;
    border-right: none;
  }
`;

export const YLine = styled.div`
  position: absolute;
  width: 1px;
  height: 100vh;
  background-color: var(--east-bay);
  opacity: 0.1;
  left: 50%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const XLine = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: var(--east-bay);
  opacity: 0.1;
  top: 407px;
  z-index: -2;

  @media (max-width: 1440px) {
    top: 350px;
  }

  @media (max-width: 768px) {
    top: 290px;
  }

  @media (max-width: 600px) {
    transform: translateX(50%);
    right: 50%;
    top: 400px;
    width: 90vw;
  }

  @media (max-width: 425px) {
    top: 350px;
  }

  @media (max-width: 320px) {
    top: 293px;
  }
`;

export const CircularSliderText = styled.div`
  position: absolute;
  top: 165px;
  transform: translateX(65%);
  right: 35%;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 1440px) {
    top: 150px;
    transform: translateX(63%);
    right: 37%;
  }

  @media (max-width: 1300px) {
    transform: translateX(65%);
    right: 35%;
  }

  @media (max-width: 1100px) {
    transform: translateX(75%);
    right: 33%;
  }

  @media (max-width: 870px) {
    right: 30%;
  }

  @media (max-width: 700px) {
    transform: translateX(72%);
    right: 28%;
  }

  @media (max-width: 600px) {
    transform: none;
    top: 350px;
    left: 25px;
  }

  @media (max-width: 425px) {
    top: 310px;
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 320px) {
    top: 260px;
  }
`;

export const ButtonArrow = styled.i<{ color?: string; left?: boolean }>`
  border: solid ${(props) => props.color ?? "var(--east-bay)"};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);

  ${(props) =>
    props.left &&
    `
    transform: rotate(135deg);
  `}

  @media (max-width: 425px) {
    padding: 2px;
  }
`;
