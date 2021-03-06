import styled from "styled-components";

export const StyledModal = styled.div`
  z-index: 999;
  max-width: 100%;
  width: 940px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.palette.background.default};
  border: ${({theme}) => `${theme.borderWidth.md} solid ${theme.palette.background.dark}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  filter: ${props => props.theme.shadow.md.map(x => `drop-shadow(${x.x}px ${x.y}px ${x.blur}px ${x.color}) `)};
`;

export const StyledModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  border-bottom: ${({theme}) => `${theme.borderWidth.md} solid ${theme.palette.background.dark}`};
`;

export const StyledModalContent = styled.div`
  background-color: ${props => props.theme.palette.background.default};
  padding: ${props => props.theme.spacing.md};
  flex-grow: 1;
`;

export const StyledModalFeet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  border-top: ${({theme}) => `${theme.borderWidth.md} solid ${theme.palette.background.dark}`};

  > div {
    display: flex;
    gap: ${props => props.theme.spacing.md};
  }
`;

export const StyledMobileModal = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  position: absolute;
  margin-top: env(safe-area-inset-top);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.palette.background.default};
  border: ${({theme}) => `${theme.borderWidth.md} solid ${theme.palette.background.dark}`};
  border-radius: ${props => props.theme.borderRadius.sm};
`;
