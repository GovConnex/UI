import React from "react";
import {
  StyledModal,
  StyledModalHead,
  StyledModalContent,
  StyledModalFeet,
  StyledMobileModal,
} from "./Modal.styles";
import Portal from "../Portal";
import Button from "../Button";
import Typography from "../Typography";
import Icon from "../Icon";
import { faXmarkLarge } from "@fortawesome/pro-solid-svg-icons";
import ClickAwayListener from "../ClickAwayListener";
import { useWindowSize, useLockBodyScroll } from "../../hooks";

export interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
  open: boolean;
  onSubmit?: () => void;
  title?: string;
  footerComponent?: React.ReactNode;
  enableClickAway?: boolean;
  disablePortal?: boolean;
  disableScrollLock?: boolean;
};

const ScrollWrapper: React.FC<{
  children: React.ReactElement;
  disableScrollLock?: boolean;
}> = ({ children, disableScrollLock }) => {
  if (!disableScrollLock) useLockBodyScroll();
  return children;
};

const Modal = (props: ModalProps) => {
  if (!props.open) return null;

  const windowSize = useWindowSize();
  const containerId = `modal-${new Date().getTime()}`;
  const fullscreen = windowSize.width && windowSize.width < 835;

  return (
    <Portal container={containerId} disablePortal={props.disablePortal}>
      <ScrollWrapper disableScrollLock={props.disableScrollLock}>
        {fullscreen ? (
          <StyledMobileModal>
            <StyledModalHead>
              <Button variant="text" onClick={props.onClose}>
                <Typography variant="displayMd" noMargin>Cancel</Typography>
              </Button>

              <Typography variant="displayMd" noMargin>
                {props.title}
              </Typography>

              <Button variant="secondary" onClick={props.onSubmit}>
                <Typography variant="displayMd" noMargin>Save</Typography>
              </Button>
            </StyledModalHead>

            <StyledModalContent>{props.children}</StyledModalContent>

            {props.footerComponent ? (
              <StyledModalFeet>
                <span>{props.footerComponent}</span>
              </StyledModalFeet>
            ) : null}
          </StyledMobileModal>
        ) : (
          <ClickAwayListener
            onClickAway={props.enableClickAway ? () => null : props.onClose}
          >
            <StyledModal>
              {props.title ? (
                <StyledModalHead>
                  <Typography variant="displayMd" noMargin>
                    {props.title}
                  </Typography>
                  <Button
                    variant="text"
                    onClick={props.onClose}
                    startAdornment={<Icon icon={faXmarkLarge} />}
                  />
                </StyledModalHead>
              ) : null}

              <StyledModalContent>{props.children}</StyledModalContent>

              {props.footerComponent || props.onSubmit ? (
                <StyledModalFeet>
                  <span>{props.footerComponent}</span>

                  {props.onSubmit ? (
                    <div>
                      <Button variant="text" onClick={props.onClose}>
                        <Typography variant="displayMd" noMargin>Cancel</Typography>
                      </Button>
                      <Button onClick={props.onSubmit}>
                        <Typography variant="displayMd" noMargin>Save</Typography>
                      </Button>
                    </div>
                  ) : null}
                </StyledModalFeet>
              ) : null}
            </StyledModal>
          </ClickAwayListener>
        )}
      </ScrollWrapper>
    </Portal>
  );
};

export default Modal;
