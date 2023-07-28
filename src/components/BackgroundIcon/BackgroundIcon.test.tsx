import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackgroundIcon from "./BackgroundIcon";
import { IconProps } from "../SvgIcon/Icon";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../theming";

describe("BackgroundIcon", () => {
  const renderStyledButton = (props: any) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <BackgroundIcon {...props} />
      </ThemeProvider>,
    );
  };

  test("renders correctly with FontAwesomeIconProps", () => {
    const iconProps: IconProps = {
      icon: "user",
      size: "2x",
    };

    const { container } = renderStyledButton(iconProps);

    const wrapper = container.querySelector("div");
    expect(wrapper).toBeInTheDocument();
  });

  test("renders correctly with customStyles", () => {
    const { container } = renderStyledButton({
      icon: "user",
      size: "2x",
      cs: {
        background: "primary.brand.50",
        color: "white",
      },
    });

    const wrapper = container.querySelector("div");
    expect(wrapper).toHaveStyle(
      `background: ${lightTheme.primary.brand["50"]}`,
    );
    expect(wrapper).toHaveStyle("color: white");
  });

  // Add more tests as needed to cover various cases
});
