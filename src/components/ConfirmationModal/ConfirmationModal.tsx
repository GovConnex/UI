import React from "react";
import { Modal, StyledModalContent, StyledModalFeet } from "../Modal";
import Box from "../Box";
import Typography from "../Typography";
import Button from "../Button";
import { ButtonVariant } from "../Button/Button";
import BackgroundIcon from "../BackgroundIcon";

export interface ConfirmationModalButton {
  variant: ButtonVariant;
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export interface ConfirmationModalProps {
  /**
   * Whether the modal is open or not.
   */
  isOpen: boolean;

  /**
   * Callback function to close the modal.
   */
  onClose: () => void;

  /**
   * Title of the ConfirmationModal.
   */
  title: string;

  /**
   * Text content of the ConfirmationModal.
   */
  text: string;

  /**
   * Background icon for the ConfirmationModal.
   */
  backgroundIcon: string | React.ReactNode;

  /**
   * Array of button configurations for the ConfirmationModal.
   */
  buttons: ConfirmationModalButton[];
}

/**
 * `ConfirmationModal` is a reusable, customizable modal component for displaying
 * confirmation prompts to users. It features a background icon, text content, and
 * configurable buttons for handling user actions.
 *
 * Component Demo: [ConfirmationModal](https://ui.govconnex.com/?path=/story/components-ConfirmationModal--example)
 *
 */

const ConfirmationModal = ({
  isOpen,
  onClose,
  title,
  text,
  backgroundIcon,
  buttons,
}: ConfirmationModalProps) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    enableClickAway
    disablePortal
    width="400px"
  >
    <StyledModalContent>
      <Box
        cs={{
          display: "flex",
          alignItems: "flex-start",
          gap: "spacing.sm",
          marginTop: "spacing.sm",
          marginBottom: "spacing.sm",
        }}
      >
        <Box>
          {typeof backgroundIcon === "string" ? (
            <BackgroundIcon icon={backgroundIcon} size="2x" />
          ) : (
            backgroundIcon
          )}
        </Box>
        <Box
          cs={{
            display: "flex",
            flexDirection: "column",
            gap: "spacing.xs",
            flexGrow: 1,
          }}
        >
          <Typography variant="heading" size="xs" noMargin>
            {title}
          </Typography>
          <Typography
            variant="body"
            noMargin
            color="core.content.contentSecondary"
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </StyledModalContent>
    <StyledModalFeet>
      <Box
        cs={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "spacing.xs",
          width: "100%",
        }}
      >
        {buttons.map(({ variant, text, onClick, isLoading, disabled }) => (
          <Button
            key={text}
            variant={variant}
            onClick={onClick}
            size="lg"
            isLoading={isLoading}
            disabled={disabled}
          >
            {text}
          </Button>
        ))}
      </Box>
    </StyledModalFeet>
  </Modal>
);

export default ConfirmationModal;
