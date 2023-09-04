import React, {useState, useEffect} from "react";
import Typography from "../Typography";
import StyledChip, {
  StyledChipTextWrapper,
  StyledAdornment,
  StyledChipIcon,
} from "./Chip.styles";
import {faXmark} from "@fortawesome/pro-solid-svg-icons";

export type ChipRole = "default" | "info" | "success" | "warning" | "error" | "primary"; // Determines colour
export type ChipPriority = "high" | "low";
export type ChipSize = "sm" | "md" | "lg";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  onDelete?: () => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  size?: ChipSize;
  priority?: ChipPriority;
  role?: ChipRole;
}

const Chip = ({
  children,
  startAdornment,
  endAdornment,
  onDelete,
  role = "default",
  size = "md",
  priority = "low",
  ...props
}: ChipProps) => {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    let extractedText = "";
    React.Children.forEach(children, (child) => {
      if (typeof child === "string") {
        extractedText += child;
      } else if (React.isValidElement(child)) {
        const childProps = child.props as {children?: React.ReactNode};
        const childText = extractTextFromComponent(childProps.children);
        extractedText += childText;
      }
    });
    setTextContent(extractedText.trim());
  }, [children]);

  // Helper function to extract text from components
  function extractTextFromComponent(component: React.ReactNode): string {
    if (typeof component === "string") {
      return component;
    } else if (Array.isArray(component)) {
      return component.map(extractTextFromComponent).join("");
    } else if (React.isValidElement(component)) {
      const childProps = component.props as {children?: React.ReactNode};
      return extractTextFromComponent(childProps.children);
    }
    return "";
  }

  return (
    <StyledChip role={role} size={size} priority={priority} {...props}>
      <StyledChipTextWrapper hasDelete={onDelete}>
        {startAdornment ? (
          <StyledAdornment position={"start"}>{startAdornment}</StyledAdornment>
        ) : null}
        <Typography
          variant="label"
          as="span"
          size={size === "lg" ? "sm" : "xs"}
          noMargin
          title={textContent}
        >
          {children}
        </Typography>
        {endAdornment ? (
          <StyledAdornment position={"end"}>{endAdornment}</StyledAdornment>
        ) : null}
      </StyledChipTextWrapper>
      <span>
        {onDelete ? <StyledChipIcon icon={faXmark} onClick={onDelete} /> : null}
      </span>
    </StyledChip>
  );
};

export default Chip;
