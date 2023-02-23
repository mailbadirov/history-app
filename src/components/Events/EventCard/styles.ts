import styled from "styled-components";

export const CardContainer = styled.div`
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 992px) {
    max-width: 300px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 150%;
    padding-left: 20px;
  }

  @media (max-width: 425px) {
    min-width: 166px;
    font-size: 14px;
    line-height: 150%;
  }
`;

export const EventYear = styled.h6`
  font-family: "Bebas Neue";
  font-size: 25px;
  color: var(--royal-blue);
  margin-bottom: 15px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

export const EventDescription = styled.p`
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
