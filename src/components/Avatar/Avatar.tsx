import React from "react";
import StyledAvatar, {StyledAvatarImage} from "./Avatar.styles";

export type Variant = "circle" | "square";
export type Size = "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  variant?: Variant;
  size?: Size;
  src?: string;
  /** The alt text for the image */
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
  const initials = names?.map((name) => name[0]?.toUpperCase())?.join("");
  return initials || "";
};

const colourVariants = [
  "#F44336",
  "#E91E63",
  // "#9C27B0",
  // "#673AB7",
  // "#3F51B5",
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

const Avatar = ({variant = "circle", size = "md", alt, src, ...rest}: AvatarProps) => {
  const [error, setError] = React.useState(false);
  const showAvatar = src && !error;
  const initials = getInitials(alt) || "";
  const colourIndex =
    ((initials?.charCodeAt(0) || 0) + (initials?.charCodeAt(1) || 0)) %
    colourVariants.length;
  const backgroundColor = colourVariants[colourIndex];
  return (
    <StyledAvatar
      backgroundColor={backgroundColor}
      size={size}
      variant={variant}
      {...rest}
    >
      {showAvatar ? <StyledAvatarImage src={src} onError={() => setError(true)} /> : null}
      {!showAvatar ? initials || "" : null}
    </StyledAvatar>
  );
};

export default Avatar;
