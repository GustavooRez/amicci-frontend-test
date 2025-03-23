import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../../components/loading/index.tsx";

describe("Loading Component", () => {
  it("Should render the loading spinner", () => {
    render(<Loading />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
