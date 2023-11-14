import React from "react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import PopIn from "../PopIn/PopIn";

export interface SnackbarActionProp {
  /**
   * Text to display on the action button
   */
  text: string;
  /**
   * Function to call when the action button is clicked
   * @param {React.MouseEvent<HTMLButtonElement>} event - The click event
   * @returns {void}
   */
  onClick: () => void;
  /**
   * Title to display on the action button
   */
  title?: string;
}

export interface SnackbarProps {
  /**
   * The message to display in the Snackbar
   */
  children?: React.ReactNode;
  /**
   * An array of action objects for the Snackbar. Each action object should have a `text` property and an `onClick` property.
   *
   * ```jsx
   * <Snackbar actions={[{text: 'Undo', onClick: handleUndoClick}]}>
   *  Your changes have been saved
   * </Snackbar>
   * ```
   */
  actions?: SnackbarActionProp[];
  /**
   * An optional node to display before the Snackbar message
   *
   * ```jsx
   * <Snackbar startAdornment={<Icon icon={['fas', 'heart']} />}>
   * Your changes have been saved
   * </Snackbar>
   * ```
   **/
  startAdornment?: React.ReactNode;
}

export interface PopinSnackbarProps extends SnackbarProps {
  /**
   * Whether or not to show the PopinSnackbar
   */
  show: boolean;

  /**
   * The position of the PopIn on the screen i.e. top or bottom
   * @default "top"
   **/
  position: "top" | "bottom";

  /**
   * The offset of the PopIn from the top or bottom of the screen. Can use a theme prop.
   */
  offset: string;

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

  /**
   * Indicates position type if fixed, absolute, etc.
   */
  positionType?: string;
}

/**
 * The Snackbar component is used to show a brief message to the user, typically at the bottom of the screen.
 *
 * It also supports actions, which can be used to undo an action or navigate to a different page.
 *
 * And it can be used in conjunction with the `PopIn` component to animate in from the bottom of the screen.
 * There is a convenient `PopinSnackbar` component that combines the two.
 *
 * ```jsx
 * <Snackbar>
 *  An action was triggered
 * </Snackbar>
 * ```
 *
 * Or PopinSnackbar:
 *
 * ```jsx
 * <PopinSnackbar show={show} position="bottom" offset="0" actions={[{text: 'Undo', onClick: handleUndoClick}]}>
 * An action was triggered
 * </PopinSnackbar>
 * ```
 *
 * @component
 */
const Snackbar = (props: SnackbarProps) => {
  return (
    <Box
      cs={{
        bg: "core.background.bgInversePrimary",
        borderRadius: "borderRadius.base",
        boxShadow: "boxShadow.sm",
        color: "primary.neutral.100",
        display: "flex",
        flexDirection: "row",
        paddingX: "spacing.sm",
        paddingY: "spacing.xs",
        alignItems: "center",
      }}
    >
      {props.startAdornment ? (
        <Box
          cs={{
            marginRight: "spacing.sm",
          }}
        >
          {props.startAdornment}
        </Box>
      ) : null}
      <Box
        cs={{
          flex: 1,
          marginRight: "spacing.xs",
        }}
      >
        <Typography variant="body" noMargin>
          {props.children}
        </Typography>
      </Box>
      <Box
        cs={{
          alignItems: "center",
          color: "primary.neutral.100",
          gap: "spacing.xs",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {props.actions?.map((action, index) => (
          <Button
            key={index}
            variant="tertiary"
            // Use style for now while there are no inverse buttons
            subtype="inverse"
            size="sm"
            onClick={action.onClick}
            noPadding
            title={action.title}
          >
            <Box
              cs={{
                color: "primary.neutral.100",
                padding: "spacing.xs",
              }}
            >
              {action.text}
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export const PopinSnackbar = (props: PopinSnackbarProps) => {
  return (
    <PopIn
      show={props.show}
      setShow={props.setShow}
      timeoutSeconds={props.timeoutSeconds}
      position={props.position}
      positionType={props.positionType}
      offset={props.offset}
      disablePortal={props.disablePortal}
      portalContainer={props.portalContainer}
    >
      <Snackbar actions={props.actions} startAdornment={props.startAdornment}>
        {props.children}
      </Snackbar>
    </PopIn>
  );
};

export default Snackbar;
