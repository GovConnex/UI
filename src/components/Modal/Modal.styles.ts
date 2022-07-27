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
  background-color: ${props => props.theme.primary.base.white};
  border: ${({theme}) => `${theme.borderWidth.md} solid ${theme.primary.neutral["200"]}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  filter: ${({theme: {boxShadow: {md}}}) => `drop-shadow(${md.x}px ${md.y}px ${md.blur}px ${md.color})`};
`;

export const StyledModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: ${props => props.theme.borderRadius.sm};
  padding: ${props => props.theme.spacing.sm};
  border-top-left-radius: ${props => props.theme.borderRadius.sm};
  border-bottom: ${({theme}) => `${theme.borderWidth.md} solid ${theme.primary.neutral["200"]}`};
`;

export const StyledModalContent = styled.div`
  background-color: ${props => props.theme.primary.base.white};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: ${props => props.theme.spacing.sm};
  flex-grow: 1;
`;

export const StyledModalFeet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.sm};
  border-bottom-right-radius: ${props => props.theme.borderRadius.sm};
  border-bottom-left-radius: ${props => props.theme.borderRadius.sm};
  border-top: ${({theme}) => `${theme.borderWidth.md} solid ${theme.primary.neutral["200"]}`};
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

  background-color: ${props => props.theme.primary.base.white};
  border: ${({theme}) => `${theme.borderWidth.sm} solid ${theme.primary.neutral["200"]}`};
  border-radius: ${props => props.theme.borderRadius.sm};
`;
