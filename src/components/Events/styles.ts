import styled from "styled-components";

export const EventsContainer = styled.div`
  max-width: 100%;
  padding: 0 80px;
  overflow: hidden;
  position: absolute;
  top: 740px;

  @media (max-width: 1440px) {
    top: 630px;
  }

  @media (max-width: 768px) {
    top: 550px;
  }

  @media (max-width: 600px) {
    padding: 0;
    top: 440px;
  }

  @media (max-width: 425px) {
    top: 380px;
  }

  @media (max-width: 320px) {
    top: 310px;
  }
`;

export const EventSlideButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  ${(props) => (props.left ? "left: 20px" : "right: 20px")};

  :disabled {
    visibility: hidden;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
