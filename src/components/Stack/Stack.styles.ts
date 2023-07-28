import styled from "styled-components";
import {
  directionProps,
  gapProps,
  alignItemProps,
  justifyContentProps,
} from "./Stack";

const StyledStack = styled.div<{
  direction?: directionProps;
  gap?: gapProps;
  alignItems?: alignItemProps;
  justifyContent?: justifyContentProps;
}>`
  ${({ theme, gap, alignItems, justifyContent, direction }) =>
    `
    display:flex;
    flex-direction: ${
      // eslint-disable-next-line no-extra-boolean-cast
      !!(direction instanceof Object) ? direction.sm : direction || "column"
    };
    align-items: ${
      // eslint-disable-next-line no-extra-boolean-cast
      !!(alignItems instanceof Object) ? alignItems.sm : alignItems || "stretch"
    };
    justify-content: ${
      // eslint-disable-next-line no-extra-boolean-cast
      !!(justifyContent instanceof Object)
        ? justifyContent.sm
        : justifyContent || "flex-start"
    };
    gap:${
      gap
        // eslint-disable-next-line no-extra-boolean-cast
        ? theme.spacing[!!(gap instanceof Object) ? gap.sm || "sm" : gap]
        : "0px"
    };
  
    @media (min-width: 600px) {
        flex-direction: ${
          // eslint-disable-next-line no-extra-boolean-cast
          !!(direction instanceof Object) ? direction.md : direction || "column"
        };
        align-items: ${
          // eslint-disable-next-line no-extra-boolean-cast
          !!(alignItems instanceof Object)
            ? alignItems.md
            : alignItems || "stretch"
        };
        justify-content: ${
          // eslint-disable-next-line no-extra-boolean-cast
          !!(justifyContent instanceof Object)
            ? justifyContent.md
            : justifyContent || "flex-start"
        };
        gap:${
          gap
            // eslint-disable-next-line no-extra-boolean-cast
            ? theme.spacing[!!(gap instanceof Object) ? gap.md || "sm" : gap]
            : "0px"
        };
    }
  
    @media (min-width: 1360px) {
        flex-direction: ${
          // eslint-disable-next-line no-extra-boolean-cast
          !!(direction instanceof Object) ? direction.lg : direction || "column"
        };
        align-items: ${
          // eslint-disable-next-line no-extra-boolean-cast
          !!(alignItems instanceof Object)
            ? alignItems.lg
            : alignItems || "stretch"
        };
        justify-content: ${
          // eslint-disable-next-line no-extra-boolean-cast
          !!(justifyContent instanceof Object)
            ? justifyContent.lg
            : justifyContent || "flex-start"
        };
        gap:${
          gap
            // eslint-disable-next-line no-extra-boolean-cast
            ? theme.spacing[!!(gap instanceof Object) ? gap.lg || "sm" : gap]
            : "0px"
        };
    }
    `}
`;

export default StyledStack;
