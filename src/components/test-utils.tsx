import React, {FC, ReactElement} from "react";
import {render, RenderOptions} from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeProvider from "./ThemeProvider";

const AllTheProviders: FC = ({children}) => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from "@testing-library/react";
export {customRender as render};
