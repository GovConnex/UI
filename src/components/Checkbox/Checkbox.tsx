import {faCheck} from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import Icon from "../Icon";
import Typography from "../Typography";
import {
  StyledCheckboxLabel,
  StyledFakeCheckbox,
  StyledCheckbox,
} from "./Checkbox.styles";

export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  onChange?: (...args: any[]) => void;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <StyledCheckboxLabel>
      <StyledCheckbox
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
      />
      <StyledFakeCheckbox checked={props.checked}>
        {props.checked ? <Icon icon={faCheck} size="xs" /> : null}
      </StyledFakeCheckbox>
      <Typography variant="label" size="md" noMargin>{props.label}</Typography>
    </StyledCheckboxLabel>
  );
};

export default Checkbox;
