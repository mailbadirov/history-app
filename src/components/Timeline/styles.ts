import styled from "styled-components";

export const TimelineContainer = styled.div`
  width: 120px;
  position: absolute;
  top: 600px;
  left: 80px;

  @media (max-width: 1440px) {
    top: 500px;
  }

  @media (max-width: 768px) {
    top: 420px;
    left: 40px;
  }

  @media (max-width: 600px) {
    top: auto;
    bottom: 20px;
    left: 20px;
  }

  @media (max-width: 425px) {
    width: 60px;
  }
`;

export const CurrentPeriod = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

export const PeriodSlideButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SlideButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid rgba(66, 86, 122, 0.5);
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background: #fffefe;
  }

  &:disabled {
    background-color: transparent;
    cursor: default;
    border: 1px solid var(--east-bayT);
  }
`;
