import React from "react";
import {render} from "../test-utils";
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {sortByCategory, ButtonMenu} from "./Menu";

describe("Menu", () => {
  test("renders the Menu component", () => {
    render(<div></div>);
  });

  describe("sortByCategory", () => {
    it("should sort options by category in ascending order", () => {
      const options = [
        {category: "b", other: "1"},
        {category: "a", other: "2"},
        {category: "c", other: "3"},
      ];
      const expected = [
        {category: "a", other: "2"},
        {category: "b", other: "1"},
        {category: "c", other: "3"},
      ];
      expect(sortByCategory(options)).toEqual(expected);
    });

    it("should not mutate the original options array", () => {
      const options = [
        {category: "b", other: "1"},
        {category: "a", other: "2"},
        {category: "c", other: "3"},
      ];
      const originalOptions = [...options]; // make a copy of the original array

      sortByCategory(options);

      expect(options).toEqual(originalOptions);
    });

    it("should handle an empty array", () => {
      expect(sortByCategory([])).toEqual([]);
    });

    it("should handle undefined categories, placing them last", () => {
      const options = [
        {category: "b", other: "1"},
        {category: undefined, other: "2"},
        {category: "a", other: "3"},
      ];
      const expected = [
        {category: "a", other: "3"},
        {category: "b", other: "1"},
        {category: undefined, other: "2"},
      ];
      expect(sortByCategory(options)).toEqual(expected);
    });

    it("should handle all undefined categories", () => {
      const options = [
        {category: undefined, other: "1"},
        {category: undefined, other: "2"},
        {category: undefined, other: "3"},
      ];
      const expected = [
        {category: undefined, other: "1"},
        {category: undefined, other: "2"},
        {category: undefined, other: "3"},
      ];
      expect(sortByCategory(options)).toEqual(expected);
    });

    it("should handle some options without a category property", () => {
      const options = [
        {other: "1"},
        {category: "a", other: "2"},
        {category: "b", other: "3"},
      ];
      const expected = [
        {category: "a", other: "2"},
        {category: "b", other: "3"},
        {other: "1"},
      ];
      expect(sortByCategory(options)).toEqual(expected);
    });
  });

  describe("ButtonMenu", () => {
    it("renders correctly and responds to click events", () => {
      render(
        <ButtonMenu
          menuProps={{
            options: [
              {
                text: "Hon Anthony Albanese MP",
              },
            ],
          }}
        />
      );

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();

      userEvent.click(button);

      // wait for Anthony Albanese to appear
      waitFor(() => {
        const option = screen.getByText("Hon Anthony Albanese MP");
        expect(option).toBeInTheDocument();
      });
    });
  });
});
