import React from "react";
import StyledAvatar, {StyledAvatarImage} from "./Avatar.styles";

export type Variant = "circle" | "square";
export type Size = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export interface AvatarProps {
  variant?: Variant;
  size?: Size;
  src?: string;
  /** The alt text for the image */
  alt?: string;
  bgColorInverse?: boolean;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const getInitials = (name?: string) => {
  if (!name) return "";

  // Split name by spaces and dashes
  const names = name.split(/[\s—-]+/);

  // Prioritize alphabetic words, but fallback to any characters
  const prioritizedNames = names.filter((word) => /^[a-zA-Z]/.test(word)).length
    ? names.filter((word) => /^[a-zA-Z]/.test(word))
    : names;

  const uppercaseNames = prioritizedNames.filter(
    (name) => name[0] === name[0]?.toUpperCase()
  );
  const lowercaseNames = prioritizedNames.filter(
    (name) => name[0] !== name[0]?.toUpperCase()
  );

  const initials = [];
  for (const uname of uppercaseNames) {
    initials.push(uname[0]?.toUpperCase());
    if (initials.length === 2) return initials.join("");
  }

  for (const lname of lowercaseNames) {
    initials.push(lname[0]?.toUpperCase());
    if (initials.length === 2) break;
  }

  return initials.join("");
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

const Avatar = ({
  variant = "circle",
  size = "md",
  alt,
  bgColorInverse,
  src,
  ...rest
}: AvatarProps) => {
  const [errorSrc, setErrorSrc] = React.useState<string | null>(null);
  const showAvatar = src && src !== errorSrc;
  const initials = getInitials(alt || "?") || "";
  const colourIndex =
    ((initials?.charCodeAt(0) || 0) + (initials?.charCodeAt(1) || 0)) %
    colourVariants.length;
  const backgroundColor = colourVariants[colourIndex];
  const isTransparentImage = src?.includes(".png");

  return (
    <StyledAvatar
      className="avatar"
      bgColorInverse={bgColorInverse}
      backgroundColor={backgroundColor}
      size={size}
      variant={variant}
      title={alt}
      isTransparentImage={isTransparentImage}
      {...rest}
    >
      {showAvatar ? (
        <StyledAvatarImage src={src} alt={alt} onError={() => setErrorSrc(src)} />
      ) : null}
      {!showAvatar ? initials || "" : null}
    </StyledAvatar>
  );
};

export default Avatar;
