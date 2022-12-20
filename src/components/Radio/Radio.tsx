import React from "react";
import {StyledRadio, RadioWrapperLabel} from "./Radio.styles";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {

};

/**
 * 
 * `Radio` renders a radio button
 *
 * Component Demo: [Radio](https://ui.govconnex.com/?path=/story/components-Radio--example)
 * 
 */
const Radio = (props: RadioProps) => {
  return (
    <RadioWrapperLabel>
      <StyledRadio type="radio" />
        tids
    </RadioWrapperLabel>
  );
};

export default Radio;
