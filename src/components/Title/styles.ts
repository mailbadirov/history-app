import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 433px;
  padding-top: 150px;

  @media (max-width: 1440px) {
    padding-top: 100px;
  }

  @media (max-width: 600px) {
    padding-top: 60px;
  }

  @media (max-width: 425px) {
    width: 200px;
  }
`;

export const Vector = styled.div`
  position: absolute;
  width: 3px;
  height: 120px;
  top: 160px;
  background-image: linear-gradient(
    to bottom,
    var(--royal-blue),
    var(--brilliant-rose)
  );

  @media (max-width: 1440px) {
    height: 90px;
    top: 105px;
  }

  @media (max-width: 768px) {
    height: 80px;
    top: 100px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Caption = styled.h1`
  width: 353px;
  padding-left: 78px;
  font-size: 56px;
  line-height: 120%;

  @media (max-width: 1440px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    width: 260px;
    padding-left: 40px;
    font-size: 32px;
  }

  @media (max-width: 425px) {
    width: 150px;
    font-size: 26px;
  }

  @media (max-width: 320px) {
    padding-left: 20px;
    font-size: 20px;
  }
`;
