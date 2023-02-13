import React from "react";
import { render } from "../test-utils";

import NewsletterCard from "./NewsletterCard";

describe("NewsletterCard", () => {
  test("renders the NewsletterCard component", () => {
    render(<NewsletterCard />);
  });
});