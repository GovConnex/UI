import styled from "styled-components";
import { Size, Variant } from "./Avatar";

export const StyledAvatarRoot = styled.div<{
  backgroundColor: string;
  size: Size;
  variant: Variant;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  line-height: 1;
  overflow: hidden;
  user-select: none;

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  font-weight: 600;

  ${({ variant, size }) => {
    switch (variant) {
      case "circle":
        return `
          border-radius: 50%;
        `;
      case "square":
        if (size === "sm")
          return `
            border-radius: 2px;
          `;
        else
          return `
          border-radius: 4px;
        `;
      default:
        return `
          border-radius: 50%;
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
          font-size: 6px;
          width: 12px;
          height: 12px;
        `;
      case "md":
        return `
          font-size: 10px;
          width: 18px;
          height: 18px;
        `;
      case "lg":
        return `
          font-size: 12px;
          width: 25px;
          height: 25px;
        `;
      case "xl":
        return `
          font-size: 12px;
          width: 32px;
          height: 32px;
        `;
      default:
        return `
          font-size: 0.7rem;
          width: 24px;
          height: 24px;
        `; // default to sm
    }
  }}
`;

export const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default StyledAvatarRoot;
