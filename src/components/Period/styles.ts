import styled from "styled-components";

export const PeriodContainer = styled.div`
  position: absolute;
  top: 325px;
  transform: translateX(-50%);
  left: 50%;
  width: 973px;
  display: flex;
  justify-content: space-between;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -0.02em;
  z-index: -1;

  @media (max-width: 1440px) {
    top: 280px;
    width: 700px;
    font-size: 140px;
    line-height: 120px;
  }

  @media (max-width: 768px) {
    top: 250px;
    width: 450px;
    font-size: 100px;
    line-height: 80px;
  }

  @media (max-width: 600px) {
    top: 200px;
    width: 350px;
    font-size: 70px;
    line-height: 1;
  }

  @media (max-width: 425px) {
    width: 300px;
    height: 60px;
    font-size: 60px;
  }

  @media (max-width: 320px) {
    top: 163px;
    width: 273px;
    font-size: 56px;
    line-height: 72px;
  }
`;

export const Year = styled.div<{ diffColor?: boolean }>`
  color: ${(props) =>
    props.diffColor ? "var(--royal-blue2)" : "var(--brilliant-rose)"};
  font-weight: 700;
`;
