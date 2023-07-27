import { faCheck, faDash } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import Icon from "../Icon";
import Typography from "../Typography";
import {
  StyledCheckboxLabel,
  StyledFakeCheckbox,
  StyledCheckbox,
} from "./Checkbox.styles";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * checked state of the checkbox
   */
  checked?: boolean;
  /**
   * label of the checkbox
   */
  label?: string;
  /**
   *  onChange handler
   */
  onChange?: (...args: any[]) => void;

  /**
   * secondary renders a lighter text weight
   */
  secondary?: boolean;

  /**
   * indeterminate renders [-] icon on the checkbox
   */
  indeterminate?: boolean;

  /**
   * withHoverStyle renders a hover style on the checkbox
   */
  withHoverStyle?: boolean;
}

/**
 *
 * `Checkbox`
 *
 * Demo:
 *
 *  - [Checkbox](https://ui.govconnex.com/?path=/story/components-checkbox--example)
 *
 * Docs:
 *
 *  - [Checkbox Docs](https://ui.govconnex.com/?path=/docs/components-checkbox--example/)
 *
 */
const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    label,
    onChange,
    secondary,
    indeterminate,
    withHoverStyle = false,
    ...rest
  } = props;
  return (
    <StyledCheckboxLabel withHoverStyle={withHoverStyle}>
      <StyledCheckbox
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...rest}
      />
      <StyledFakeCheckbox checked={checked || indeterminate}>
        {indeterminate ? (
          <Icon icon={faDash} size="xs" />
        ) : checked ? (
          <Icon icon={faCheck} size="xs" />
        ) : null}
      </StyledFakeCheckbox>
      {label ? (
        <Typography variant={secondary ? "body" : "label"} size="md" noMargin>
          {label}
        </Typography>
      ) : null}
    </StyledCheckboxLabel>
  );
};

export default Checkbox;
