import styled from "styled-components";
import {getValueFromPath} from "../../core/styleFunctions";

export const StyledAdornment = styled.span<{color?: string}>`
  color: ${({theme, color}) => (color ? getValueFromPath(theme, color) : "inherit")};
`;

export const StyledList = styled.div<{scroll?: boolean}>`
  ${({scroll}) =>
    scroll &&
    `
    overflow: auto;
    position: relative;
  `}
`;

export const StyledListItem = styled.div<{
  button?: boolean;
  hoverIcon?: boolean;
  selected?: boolean;
}>`
  background-color: ${(props) => props.theme.primary.base.white};
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.sm};

  &:hover {
    transition: all 300ms ease;
  }

  ${(props) =>
    props.hoverIcon &&
    `
    & > span > svg {
      color: ${props.theme.primary.neutral["300"]};
      opacity: 0;
    }

    &:hover {
      background-color: ${props.theme.primary.neutral["100"]};

      & > span > svg {
        opacity: 1;
      }
    }
  `}

  ${(props) =>
    props.button &&
    `
    cursor: pointer;

    &:hover {
      background-color: ${props.theme.primary.neutral["100"]};
    }
  `}

  ${(props) =>
    props.selected && `background-color: ${props.theme.primary.neutral["100"]};`}
`;

export const StyledListItemStart = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  align-items: center;
  justify-content: space-between;
`;
