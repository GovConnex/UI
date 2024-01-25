import styled from "styled-components";

export const StyledModalBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  z-index: 999;
`;

export const StyledModal = styled.div<{
  overflow?: string;
}>`
  z-index: 1000;
  max-width: calc(100% - ${(props) => props.theme.spacing.lg});
  max-height: calc(100% - ${(props) => props.theme.spacing.lg});
  overflow: ${({overflow}) => (overflow ? overflow : "auto")};
  // width: 940px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary.base.white};
  border: ${({theme}) => `${theme.borderWidth.md} solid #E6E6E7`};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  filter: ${({
    theme: {
      boxShadow: {md},
    },
  }) => `drop-shadow(${md.x}px ${md.y}px ${md.blur}px ${md.color})`};
`;

export const StyledModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: ${(props) => props.theme.borderRadius.sm};
  padding: ${(props) => props.theme.spacing.sm};
  border-top-left-radius: ${(props) => props.theme.borderRadius.sm};
  border-bottom: ${({theme}) => `${theme.borderWidth.md} solid #E6E6E7`};
`;

export const StyledModalContent = styled.div`
  background-color: ${(props) => props.theme.primary.base.white};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  padding: ${(props) => props.theme.spacing.sm};
  flex-grow: 1;
`;

export const StyledModalFeet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.primary.neutral["100"]};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.sm};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.sm};
`;

export const StyledMobileModal = styled.div`
  z-index: 999;
  width: 100%;
  height: fit-content;
  position: fixed;
  overflow: auto;
  margin-top: env(safe-area-inset-top);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.primary.base.white};
  border: ${({theme}) => `${theme.borderWidth.sm} solid #E6E6E7`};
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;
