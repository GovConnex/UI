import React from "react";
import {
  StyledModal,
  StyledModalBack,
  StyledModalFeet,
  StyledModalHead,
  StyledModalContent,
  StyledMobileModal,
} from "./Modal.styles";
import Portal from "../Portal";
import ClickAwayListener from "../ClickAwayListener";
import {useWindowSize, useLockBodyScroll} from "../../hooks";

export interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
  open: boolean;
  enableClickAway?: boolean;
  disablePortal?: boolean;
  disableScrollLock?: boolean;
  width?: string;
  overflow?: string;
}

const ScrollWrapper: React.FC<{
  children: React.ReactElement;
  disableScrollLock?: boolean;
}> = ({children, disableScrollLock}) => {
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
      <ScrollWrapper disableScrollLock={!fullscreen && props.disableScrollLock}>
        {fullscreen ? (
          <StyledMobileModal>{props.children}</StyledMobileModal>
        ) : (
          <StyledModalBack>
            <ClickAwayListener
              onClickAway={props.enableClickAway ? props.onClose : () => null}
            >
              <StyledModal overflow={props.overflow} style={{width: props.width}}>
                {props.children}
              </StyledModal>
            </ClickAwayListener>
          </StyledModalBack>
        )}
      </ScrollWrapper>
    </Portal>
  );
};

export {Modal, StyledModalContent, StyledModalHead, StyledModalFeet};
