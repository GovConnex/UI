import { getValueFromPath } from "../../core/styleFunctions";
import styled, { css } from "styled-components";

export const PopInContainer = styled.div<{
  show: boolean;
  position?: "top" | "bottom";
  offset?: string;
}>`
  position: absolute;
  z-index: 1000;
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  ${({ position = "bottom", offset = "spacing.md", theme }) => css`
    ${position}: ${getValueFromPath(theme, offset)};
  `}
  transform: ${({ position }) =>
    position === "top" ? "translateY(-150%)" : "translateY(150%)"};
  ${({ show }) =>
    show &&
    css`
      transform: translateY(0%);
    `}
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
