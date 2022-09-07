import React from "react";
import BackgroundIcon from "../BackgroundIcon";
import { StyledPageHeader, StyledPageTitle } from "./PageHeader.styles";

export interface PageHeaderProps {
  children?: React.ReactNode;
  icon: React.ReactNode;
}

const PageHeader = ({ icon, children }: PageHeaderProps) => {
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
