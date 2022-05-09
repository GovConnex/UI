import React from "react";
import Typography from "../Typography";
import StyledAvatar, {
  StyledAvatarImage,
  StyledAvatarInitials,
} from "./Avatar.styles";

export type Variant = "circle" | "square";
export type Size = "sm" | "md";

export interface AvatarProps {
  variant?: Variant;
  size?: Size;
  src?: string;
  /**
   * The alt text for the image
   */
  alt?: string;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const getInitials = (name?: string) => {
  const names = name?.split(" ");
  const initials = names?.map((name) => name[0].toUpperCase()).join("");
  return initials || "";
};

const typographyVariants = {
  sm: "textSm",
  md: "textMd",
};

const colourVariants = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
];

const Avatar = ({
  variant = "circle",
  size = "md",
  alt,
  src,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  onClick,
  className,
}: AvatarProps) => {
  const [error, setError] = React.useState(false);
  const showAvatar = src && !error;
  return (
    <StyledAvatar size={size}>
      {showAvatar ? <StyledAvatarImage /> : null}
      {!showAvatar ? <Typography variant={typographyVariants[size]} /> : null}
    </StyledAvatar>
  );
};

export default Avatar;
