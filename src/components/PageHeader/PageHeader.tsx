import React from "react";
import BackgroundIcon from "../BackgroundIcon";
import {StyledPageHeader, StyledPageTitle} from "./PageHeader.styles";

export interface PageHeaderProps {
  children?: React.ReactNode;
  icon: React.ReactNode;
}
/**
 *
 * @deprecated `PageHeader` is being deprecated and will be removed in next major version `@govconnex/ui@v0.1.x`
 * use Box with Stack instead
 *
 */
const PageHeader = ({icon, children}: PageHeaderProps) => {
  return (
    <StyledPageHeader>
      <BackgroundIcon icon={icon} size="2x" />
      <StyledPageTitle variant="heading" size="sm">
        {children}
      </StyledPageTitle>
    </StyledPageHeader>
  );
};

export default PageHeader;
