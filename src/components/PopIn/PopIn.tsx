// PopIn.tsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PopInContainer } from "./PopIn.styles";
import Portal from "../Portal";

export interface PopInProps {
  /**
   * Whether or not to show the PopIn
   */
  show: boolean;
  /**
   * The position of the PopIn on the screen i.e. top or bottom
   * @default "bottom"
   **/
  position?: "top" | "bottom";
  /**
   * The offset of the PopIn from the top or bottom of the screen. Can use a theme prop.
   */
  offset?: string;
  /**
   * The content of the PopIn. For example a Snackbar.
   */
  children: React.ReactNode;

  /**
   * A function that is called when the PopIn is closed
   */
  setShow?: (show: boolean) => void;

  /**
   * The number of seconds to show the PopIn before closing it
   * @default 3
   **/
  timeoutSeconds?: number;

  /**
   * Whether or not to disable the portal. If true, the PopIn will be rendered in place.
   */
  disablePortal?: boolean;

  /**
   * The ID of the container to render the PopIn in, if using the portal.
   */
  portalContainer?: string | HTMLElement | null;
}

/**
 * `PopIn` is a component that animates in from the top or bottom of the screen.
 *
 * ```jsx
 * <PopIn show={show} position="top" offset="0">
 * <Typography variant="h4">Hello World</Typography>
 * </PopIn>
 */
const PopIn: React.FC<PopInProps> = ({
  show,
  position,
  offset,
  children,
  setShow,
  timeoutSeconds = 3,
  disablePortal = false,
  portalContainer,
}) => {
  // For storing timeout ID, and ensuring timeout state is consistent
  const timeoutId = React.useRef<number | NodeJS.Timeout>();

  // useEffect, if show is true, set timeout to setShow to false after <timeout> seconds
  useEffect(() => {
    if (show && setShow) {
      const id = setTimeout(() => {
        setShow(false);
      }, timeoutSeconds * 1000);
      timeoutId.current = id;
    } else if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  }, [show, setShow, timeoutSeconds]);

  return (
    <Portal disablePortal={disablePortal} container={portalContainer}>
      <PopInContainer show={show} position={position} offset={offset}>
        {children}
      </PopInContainer>
    </Portal>
  );
};

export default PopIn;
