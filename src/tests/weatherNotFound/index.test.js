import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherNotFound from "../../components/weatherNotFound/index.tsx"

describe("WeatherNotFound Component", () => {
  it("Should render the error message correctly", () => {
    render(<WeatherNotFound />);

    expect(screen.getByText("Cidade não encontrada!")).toBeInTheDocument();
  });
});
