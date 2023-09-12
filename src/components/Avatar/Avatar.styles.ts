import styled from "styled-components";
import {Size, Variant} from "./Avatar";

export const StyledAvatarRoot = styled.div<{
  backgroundColor: string;
  bgColorInverse?: boolean;
  isTransparentImage?: boolean;
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

  background-color: ${({backgroundColor, bgColorInverse, isTransparentImage, theme}) =>
    isTransparentImage
      ? theme.core.background.bgPrimary
      : bgColorInverse
      ? theme.core.background.bgInversePrimary
      : backgroundColor};

  border: ${({isTransparentImage, theme}) =>
    isTransparentImage ? `1px solid ${theme.core.border.borderLight}` : "none"};
  color: white;
  font-weight: 600;
  white-space: nowrap;

  ${({variant, size}) => {
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
        else if (size === "3xl" || size === "4xl")
          return `
            border-radius: 8px;
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

  ${({size}) => {
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
      case "2xl":
        return `
          font-size: 1rem;
          width: 40px;
          height: 40px;
        `;
      case "3xl":
        return `
          font-size: 2rem;
          width: 64px;
          height: 64px;
        `;
      case "4xl":
        return `
          font-size: 4rem;
          width: 128px;
          height: 128px;
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
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default StyledAvatarRoot;
