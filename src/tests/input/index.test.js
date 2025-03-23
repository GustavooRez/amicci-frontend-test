import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../../components/input/index.tsx";

describe("Input Component", () => {
  it("Should render the input with the correct name", () => {
    render(<Input inputName="testInput" onEdit={jest.fn()} />);
    
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", "testInput");
  });

  it("Must call the onEdit function when changing the value", () => {
    const onEditMock = jest.fn();
    render(<Input inputName="testInput" onEdit={onEditMock} />);
    
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "São Paulo" } });

    expect(onEditMock).toHaveBeenCalledTimes(1);
    expect(onEditMock).toHaveBeenCalledWith("São Paulo");
  });
});
