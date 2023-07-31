import styled from "styled-components";
import Avatar from "../Avatar";
import Typography from "../Typography";
import {shadowFromProp} from "../style-utils";

export const StyledIssueCard = styled.div<{focused?: boolean}>`
  background: ${(props) => props.theme.core?.background?.bgPrimary};
  border-width: ${(props) =>
    props.focused ? props.theme.borderWidth.lg : props.theme.borderWidth.md};
  border-style: solid;
  border-color: ${(props) => props.theme.core?.border?.borderLight};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  padding: ${(props) => props.theme.spacing.md};
  position: relative;
  min-height: 216px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-decoration: none;

  &:hover {
    box-shadow: ${(props) => shadowFromProp(props.theme.boxShadow.xs)};
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

export const Title = styled(Typography)`
  color: ${(props) => props.theme.core.content.contentPrimary};
  display: block;
  margin: 0;
  flex: 1;
`;

export const Description = styled(Typography)`
  color: ${(props) => props.theme.core.content.contentSecondary};
  display: block;
  flex: 1;
`;

export const Avatars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${({theme}) => theme.spacing.xs};
`;

export const StyledAvatar = styled(Avatar)`
  margin-left: -${({theme}) => theme.spacing.xs};
  outline: ${({theme}) => theme.borderWidth.lg} solid
    ${({theme}) => theme.core.background.bgPrimary};
`;

export const Actions = styled.div`
  align-items: center;
  color: ${(props) => props.theme.core.content.contentSecondary};
  display: flex;
  flex-direction: row;
  gap: ${({theme}) => theme.spacing.xs};
`;

export const NoMembers = styled(Typography)`
  color: ${({theme}) => theme.core.content.contentTertiary};
`;

export const LockIcon = styled.div`
  margin: 0 ${({theme}) => theme.spacing.xs};
`;

export const StyledGrayAvatar = styled(StyledAvatar)`
  background-color: ${({theme}) => theme.core.background.bgTertiary};
`;

export default StyledIssueCard;
