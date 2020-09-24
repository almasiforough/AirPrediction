import React from "react";
import { render } from "@testing-library/react";
import Header from "../index";
import '@testing-library/jest-dom/extend-expect'
test("renders header component", () => {
  let testProps = {
    title: "air quality",
  };
  const { getByText } = render(<Header {...testProps} />);
  const linkElement = getByText(/air quality/i);
  expect(linkElement).toBeInTheDocument();
});
