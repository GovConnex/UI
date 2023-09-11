import styled from "styled-components";
import {Spacing} from "../../theming/global-theme.interface";
import {shadowFromProp} from "../style-utils";

const StyledCard = styled.div<{
  focused: boolean;
  padding?: keyof Spacing;
  selected?: boolean;
  hoverStyle?: "none" | "shadow" | "regress";
  noPadding?: boolean;
}>(
  ({theme, hoverStyle, focused, selected, padding, noPadding}) =>
    `
  background: ${theme.core?.background?.bgPrimary};
  padding: ${
    noPadding
      ? "0px"
      : `calc(${padding ? theme.spacing[padding] : theme.spacing.sm}${
          focused || selected ? ` - ${theme.borderWidth.md}` : ""
        })`
  };
  margin-bottom: ${theme.spacing.xs};
  transition: border-color 300ms ease-out;
  border-width: ${focused || selected ? theme.borderWidth.lg : theme.borderWidth.md};
  border-style: solid;
  border-color: ${
    focused || selected
      ? theme.core?.border?.borderFocus
      : theme.core?.border?.borderLight
  };
  border-radius: ${theme.borderRadius.xs};
  box-shadow: ${focused ? shadowFromProp(theme.boxShadow.sm) : "none"};

  ${
    hoverStyle === "shadow"
      ? `
      &:hover { box-shadow: ${shadowFromProp(theme.boxShadow.xs)}; }; `
      : null
  };
      
  ${
    hoverStyle === "regress"
      ? `
      &:hover { background-color: ${theme.extended.state.secondaryHover}; }; `
      : null
  };
        
  `
);

// const StyledCard = styled.div<{
//   cs?:any,
//   focused: boolean;
//   padding?: string;
//   theme: any;
// }>((props) =>
// addCustomStyles(props),
// ({ theme, focused }) =>
// `
// background: ${theme.core?.background?.bgPrimary};
// padding: ${`calc(${theme.spacing.sm}${focused ? ` - ${theme.borderWidth.md}` : ""
//     })`};
//   margin-bottom: ${theme.spacing.xs};
//   transition: border-color 300ms ease-out;
//   border-width: ${focused ? theme.borderWidth.lg : theme.borderWidth.md};
//     border-style: solid;
//     border-color: ${focused
//       ? theme.core?.border?.borderFocus
//       : theme.core?.border?.borderLight};
//       border-radius: ${theme.borderRadius.xs};
//       box-shadow: ${focused ? shadowFromProp(theme.boxShadow.sm) : "none"};

//         &:hover {
//           box-shadow: ${shadowFromProp(theme.boxShadow.xs)};
//         }
//         `
// );

export default StyledCard;
