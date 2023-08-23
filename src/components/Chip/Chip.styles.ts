import styled, {DefaultTheme} from "styled-components";
import Icon from "../Icon";
import {ChipPriority, ChipRole, ChipSize} from "./Chip";

const propsToBg = (theme: DefaultTheme, role: ChipRole, priority: ChipPriority) =>
  ({
    default: {
      high: theme.core.background.bgSecondary,
      low: theme.core.background.bgSecondary,
    },
    info: {
      high: theme.extended.support.infoBase,
      low: theme.extended.support.infoLight,
    },
    warning: {
      high: theme.extended.support.warningBase,
      low: theme.extended.support.warningLight,
    },
    error: {
      high: theme.extended.support.errorBase,
      low: theme.extended.support.errorLight,
    },
    success: {
      high: theme.extended.support.successBase,
      low: theme.extended.support.successLight,
    },
    primary: {
      high: theme.core.content.contentBrandPrimary,
      low: theme.core.content.contentBrandTertiary,
    },
  })[role][priority];

const propsToColour = (theme: DefaultTheme, role: ChipRole, priority: ChipPriority) =>
  ({
    default: {
      high: theme.core.content.contentPrimary,
      low: theme.core.content.contentPrimary,
    },
    info: {
      high: theme.core.content.contentInversePrimary,
      low: theme.extended.support.infoDark,
    },
    warning: {
      high: theme.core.content.contentInversePrimary,
      low: theme.extended.support.warningDark,
    },
    error: {
      high: theme.core.content.contentInversePrimary,
      low: theme.extended.support.errorDark,
    },
    success: {
      high: theme.core.content.contentInversePrimary,
      low: theme.extended.support.successDark,
    },
    primary: {
      high: theme.core.content.contentInversePrimary,
      low: theme.primary.brand[900],
    },
  })[role][priority];

const StyledChip = styled.div<{
  size: ChipSize;
  priority: ChipPriority;
  role: ChipRole;
}>`
  background-color: ${({theme, role, priority}) => propsToBg(theme, role, priority)};
  padding: 0 ${({theme}) => theme.spacing.xs};
  height: ${({theme, size}) => theme.spacing[size]};
  line-height: ${({theme, size}) => theme.spacing[size]};
  border-radius: ${({theme}) => theme.borderRadius.minimal};
  color: ${({theme, role, priority}) => propsToColour(theme, role, priority)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  max-width: 300px;
`;

export const StyledChipTextWrapper = styled.span`
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
`;

export const StyledChipIcon = styled(Icon)`
  margin-left: ${({theme}) => theme.spacing.xs};
  border-radius: 50%;
  width: calc(${({theme}) => theme.spacing.xs} + ${({theme}) => theme.spacing.xxs});
  height: calc(${({theme}) => theme.spacing.xs} + ${({theme}) => theme.spacing.xxs});
`;

export const StyledAdornment = styled.span<{position: string}>`
  ${(props) =>
    `margin-${props.position === "end" ? "left" : "right"}: ${props.theme.spacing.xs}`};
  vertical-align: middle;
`;

export default StyledChip;
