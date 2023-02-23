import styled from "styled-components";

export const SmallSliderContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 6px;
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SmallPoint = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--east-bay);
  opacity: 0.5;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
    opacity: 1;
  `}
`;
