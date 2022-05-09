import styled from "styled-components";
import { Size } from "./Avatar";

export const StyledAvatarRoot = styled.div<{ size: Size }>``;

export const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledAvatarInitials = styled.div<{ size: Size }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default StyledAvatarRoot;
