import React from "react";
import { StyledSelect, MenuWrapepr } from "./Select.styles";
import DropdownController from "../DropdownController";
import SvgIcon from "../SvgIcon";
import Chip from "../Chip";
import Typography from "../Typography";

export interface SelectProps {
  /**
   * content of the Select
   */
  children?: React.ReactNode;

  /**
   * renders a value inside a chip
   */
  chipValue?: string;

  /**
   * title of the Select
   */
  title?: string;

  /**
   * handles width of the Selector
   */
  fullWidth?: boolean;

  /**
   * maxHeight of the menu
   */
  maxHeight?: string;

  /**
   * error message
   */
  error?: string;

  /**
   * hint message
   */
  hint?: string;
}

/**
 *
 * `Select` renders a dropdown menu
 *
 * Component Demo: [Select](https://ui.govconnex.com/?path=/story/components-Select--example)
 *
 */
const Select = (props: SelectProps) => {
  const { chipValue, fullWidth = false, error,hint, maxHeight, title, ...rest } = props;
  return (
    <>
    <DropdownController
    overlay={(close) => (
      <MenuWrapepr maxHeight={maxHeight || null}>
          {React.Children.map(props.children, (child) => child)}
        </MenuWrapepr>
      )}
      rootButton={({ toggleVisibility, visible, ref }) => (
        <StyledSelect
        fullWidth={fullWidth}
        ref={ref}
        visible={visible}
        onClick={(e) => (e.preventDefault(), toggleVisibility())}
        error={!!error}
        {...rest}
        >
          {title}

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {chipValue ? (
              <Chip size="md" role={error ? "error" : "primary"}>
                {chipValue}
              </Chip>
            ) : null}
            <SvgIcon size="sm" icon="caret-down" />
          </div>
        </StyledSelect>
)}
/>

{error || hint ? (
  <Typography
  variant="body"
  color={error ? "secondary.red.500" : "primary.neutral.400"}
  size="sm"
  noMargin
  >
  {error || hint}
  </Typography>
  ) : null}
  </>
)};

export default Select;
