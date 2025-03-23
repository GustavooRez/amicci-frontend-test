import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/button/index.tsx";

describe("Button Component", () => {
  const handleClick = jest.fn();
  it("Render the button with the correct label", () => {
    render(<Button buttonLabel="Click" onClick={handleClick}/>);
    expect(screen.getByText("Click")).toBeInTheDocument();
  });

  it("Fires the onClick event when clicked", () => {
    render(<Button buttonLabel="Click" onClick={handleClick} />);
    
    const button = screen.getByText("Click");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
})